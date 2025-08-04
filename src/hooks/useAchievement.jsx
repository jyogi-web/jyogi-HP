import { useEffect, useState } from 'react';

export const useAchievement = (limit = null) => {
  const [achievements, setAchievements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const url = new URL('/api/achievements', window.location.origin);
        
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

        // APIレスポンスの構造に合わせて処理
        if (!data.success) {
          throw new Error(data.error || 'データの取得に失敗しました');
        }

        console.log('取得したデータ:', data.data);
        setAchievements(data.data || []);
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
