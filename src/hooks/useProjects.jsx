import { useEffect, useState } from 'react';

export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8787';
                const url = new URL('/api/projects', baseUrl);

                const response = await fetch(url, {
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

                console.log('取得したプロジェクトデータ:', data.data);
                console.log('配列の長さ:', data.data?.length);
                console.log('最初のプロジェクト:', data.data?.[0]);
                setProjects(data.data || []);
                setIsLoading(false);
            } catch (err) {
                console.error('エラーが発生しました:', err);
                setError(err.message);
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return { projects, isLoading, error };
};
