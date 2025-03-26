import React, { useState, useEffect } from 'react'
import { Container, Box, Text, Timeline } from "@chakra-ui/react"
import SectionHeader from "./SectionHeader"

const Achievement = () => {
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
        setAchievements(fetchedAchievements.reverse().slice(0, 5));
        setIsLoading(false)
      } catch (err) {
        console.error('エラーが発生しました:', err);
        setError(err.message)
        setIsLoading(false)
      }
    }

    fetchAchievements()
  }, [])

  // ローディング状態の表示
  if (isLoading) {
    return (
      <Container maxW="75%" py={12} mx="auto">
        <SectionHeader size="3xl">活動実績</SectionHeader>
        <Box my={10} textAlign="center">
          <Text>データを読み込み中...</Text>
        </Box>
      </Container>
    )
  }

  // エラー状態の表示
  if (error) {
    return (
      <Container maxW="75%" py={12} mx="auto">
        <SectionHeader size="3xl">活動実績</SectionHeader>
        <Box my={10} textAlign="center">
          <Text color="red.500">エラーが発生しました: {error}</Text>
        </Box>
      </Container>
    )
  }

  return (
    <Container maxW="75%" py={12} mx="auto">
      <SectionHeader
        size="3xl"
        buttontext="他の活動を見る"
        buttonhref="/activities"
      >
        活動実績
      </SectionHeader>

      <Box my={10}>
        {achievements.length === 0 ? (
          <Text textAlign="center">表示するデータがありません</Text>
        ) : (
          <>
            <Timeline.Root
              size='md'
              variant="subtle"
              colorScheme="blue"
              >
              {achievements.map((achievement, index) => (
                <Timeline.Item key={index} mb={10}>
                  <Timeline.Content flex="1" width="20%" textAlign="right" pr={4}>
                    <Text
                      fontSize="sm"
                      color="gray.600"
                      fontWeight="medium"
                      >
                      {achievement.date}
                    </Text>
                  </Timeline.Content>
                  <Timeline.Connector>
                    <Timeline.Separator />
                    <Timeline.Indicator
                      boxSize={5}
                      bg="blue.500"
                      />
                  </Timeline.Connector>
                  <Timeline.Content flex="4" pl={6}>
                    <Timeline.Title
                      fontWeight="bold"
                      fontSize="xl"
                      mb={2}
                      >
                      {achievement.title}
                    </Timeline.Title>
                    <Text color="gray.700">
                      {achievement.summary}
                    </Text>
                  </Timeline.Content>
                </Timeline.Item>
              ))}
            </Timeline.Root>
            <Box textAlign="center" mt={4} color="gray.500">
              <Text fontSize="sm" fontStyle="italic">
                ・
              </Text>
              <Text fontSize="sm" fontStyle="italic">
                ・
              </Text>
              <Text fontSize="sm" fontStyle="italic">
                ・
              </Text>
              <Text fontSize="sm" marginTop={8}>
                and more
              </Text>
            </Box>
          </>
        )}
      </Box>
    </Container>
  )
}

export default Achievement
