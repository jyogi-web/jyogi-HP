import { useEffect, useState } from 'react';

export const useAchievement = (limit = null) => {
  const [achievements, setAchievements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const SPREADSHEET_ID = import.meta.env.VITE_SPREADSHEET_ID;
        const API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;

        if (!SPREADSHEET_ID || !API_KEY) {
          throw new Error('環境変数が設定されていません');
        }

        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Achievements!A2:D?key=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error('データの取得に失敗しました: ' + response.status);
        }

        const data = await response.json();

        if (!data.values || !data.values.length) {
          console.log('データが空です');
          setAchievements([]);
          setIsLoading(false);
          return;
        }

        const fetchedAchievements = data.values
          .map(([date, title, summary, hasAward]) => ({
            date,
            title,
            summary,
            hasAward: hasAward === "有"
          }))
          .filter(achievement =>
            achievement.date &&
            achievement.date.trim() !== '' &&
            achievement.title &&
            achievement.title.trim() !== '' &&
            achievement.summary &&
            achievement.summary.trim() !== ''
          );

        const sortedAchievements = fetchedAchievements.sort((a, b) => {
          const dateA = new Date(a.date.replace(/(\d+)\/(\d+)\/(\d+)/, '$1-$2-$3'));
          const dateB = new Date(b.date.replace(/(\d+)\/(\d+)\/(\d+)/, '$1-$2-$3'));

          return dateB - dateA;
        });

        console.log('取得したデータ（欠損データ除外後）:', sortedAchievements);

        // limitが指定されている場合は上位n件のみを返す
        const limitedAchievements = limit ? sortedAchievements.slice(0, limit) : sortedAchievements;

        setAchievements(limitedAchievements);
        setIsLoading(false);
      } catch (err) {
        console.error('エラーが発生しました:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchAchievements();
  }, [limit]);

  return { achievements, isLoading, error };
};
