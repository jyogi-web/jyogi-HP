import { useEffect, useState } from 'react'

export const useNews = (limit = null) => {
    const [newsList, setNewsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNewsList = async () => {
            try {
                const url = new URL('/api/news', window.location.origin);
                
                if (limit) {
                    url.searchParams.append('limit', limit.toString());
                }

                const response = await fetch(url.toString(), {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    mode: 'cors',
                    credentials: 'omit'
                });

                if (!response.ok) {
                    throw new Error(`データの取得に失敗しました: ${response.status}`);
                }

                const data = await response.json();

                if (!data.success) {
                    throw new Error(data.error || 'データの取得に失敗しました');
                }

                console.log('取得したデータ:', data.data);
                setNewsList(data.data || []);
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
