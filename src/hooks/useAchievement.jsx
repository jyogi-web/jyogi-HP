import {useEffect,useState} from 'react'

const useAchievement = () => {
      const [achievements, setAchievements] = useState([])
      const [isLoading, setIsLoading] = useState(true)
      const [error, setError] = useState(null)
  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const SPREADSHEET_ID = import.meta.env.VITE_SPREADSHEET_ID
        const API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY

        console.log("SPREADSHEET_ID:", SPREADSHEET_ID)
        console.log("API_KEY:", API_KEY)

        if (!SPREADSHEET_ID || !API_KEY) {
          throw new Error('環境変数が設定されていません');
        }

        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Achievements!A2:C?key=${API_KEY}`
        )

        if (!response.ok) {
          throw new Error('データの取得に失敗しました: ' + response.status)
        }

        const data = await response.json()

        // データが存在するか確認
        if (!data.values || !data.values.length) {
          console.log('データが空です');
          setAchievements([]);
          setIsLoading(false);
          return;
        }

        const fetchedAchievements = data.values.map(([date, title, summary]) => ({
          date,
          title,
          summary
        }))

        console.log('取得したデータ:', fetchedAchievements);
        setAchievements(fetchedAchievements.reverse());
        setIsLoading(false)
      } catch (err) {
        console.error('エラーが発生しました:', err);
        setError(err.message)
        setIsLoading(false)
      }
    }

    fetchAchievements()
  }, [])

  return { achievements, isLoading, error };
}

export default useAchievement
