import { useEffect, useState } from 'react'

export const useNews = (limit = null) => {
    const [newsList, setNewsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNewsList = async () => {
            try {
                const SPREADSHEET_ID = import.meta.env.VITE_SPREADSHEET_ID;
                const API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;

                if (!SPREADSHEET_ID || !API_KEY) {
                    throw new Error('環境変数が設定されていません');
                }

                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/NewsList!A2:G?key=${API_KEY}`
                );

                if (!response.ok) {
                    throw new Error('データの取得に失敗しました: ' + response.status);
                }

                const data = await response.json();

                if (!data.values || !data.values.length) {
                    console.log('データが空です');
                    setNewsList([]);
                    setIsLoading(false);
                    return;
                }

                const fetchedNewsList = data.values.map(([title, link, published, updated, summary, content, thumbnail]) => ({
                    title,
                    link,
                    published,
                    updated,
                    summary,
                    content,
                    thumbnail
                }));

                // 日付の新しい順に並べ替え（publishedとupdatedで比較）
                const sortedNewsList = fetchedNewsList.sort((a, b) => {
                    const dateA = new Date(a.published || a.updated); // 日付がない場合は`updated`を使用
                    const dateB = new Date(b.published || b.updated);

                    return dateB - dateA; // 新しい順に並べ替え
                });

                console.log('取得したデータ:', sortedNewsList);

                // limitが指定されている場合は上位n件のみを返す
                const limitedNewsList = limit ? sortedNewsList.slice(0, limit) : sortedNewsList;

                setNewsList(limitedNewsList);
                setIsLoading(false);
            } catch (err) {
                console.error('エラーが発生しました:', err);
                setError(err.message);
                setIsLoading(false);
            }
        };

        fetchNewsList();
    }, [limit]);

    return { newsList, isLoading, error };
};

export default useNews;
