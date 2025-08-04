import { atom } from 'jotai';

/**
 * APIからProjectsデータを取得する
 */
const rawProjectsAtom = atom(async () => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    if (!baseUrl) {
        throw new Error('APIのベースURLが設定されていません。');
    }

    const url = new URL('/api/projects', baseUrl);
    const response = await fetch(url.toString());

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`データの取得に失敗しました: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    if (!data.success) {
        throw new Error(data.error || 'APIからのデータ取得に失敗しました');
    }
    return data.data || [];
});

/**
 * UIコンポーネントがProjectsデータを読み込む
 */
export const projectsAtom = atom(
    (get) => get(rawProjectsAtom)
);
