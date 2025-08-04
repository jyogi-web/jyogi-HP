import { atom } from 'jotai';

/**
 * APIから直接データを取得
 */
const rawAchievementsAtom = atom(async () => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    if (!baseUrl) {
        throw new Error('APIのベースURLが設定されていません。');
    }

    const url = new URL('/api/achievements', baseUrl);
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
 * UIコンポーネントがデータを読み込む

 */
export const achievementsAtom = atom(
    (get) => get(rawAchievementsAtom)
);
