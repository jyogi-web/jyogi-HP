import { atom } from 'jotai';

/**
 * APIからNewsデータを取得する
 */
const rawNewsAtom = atom(async () => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    if (!baseUrl) {
        throw new Error('APIのベースURLが設定されていません。');
    }

    const url = new URL('/api/news', baseUrl);
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
 * UIコンポーネントがNewsデータを読み込むためのアトム
 */
export const newsAtom = atom(
    (get) => get(rawNewsAtom)
);
