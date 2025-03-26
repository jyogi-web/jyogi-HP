import React, { useState, useEffect } from 'react'
import { Container, Box, Text, Timeline } from "@chakra-ui/react"
import { useColorModeValue } from "@/components/ui/color-mode";
import SectionHeader from "@/components/SectionHeader"
import useAchievement from '@/hooks/useAchievement';

const AchievementList = () => {
  const { achievements, isLoading, error } = useAchievement()
  // ダークモード対応の色設定
  const dateColor = useColorModeValue("gray.600", "gray.400")
  const titleColor = useColorModeValue("black", "white")
  const summaryColor = useColorModeValue("gray.700", "gray.300")
  const errorColor = useColorModeValue("red.500", "red.300")
  const loadingColor = useColorModeValue("gray.600", "gray.400")
  const emptyDataColor = useColorModeValue("gray.600", "gray.400")

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

  // ローディング状態の表示
  if (isLoading) {
    return (
      <Container maxW="75%" py={12} mx="auto">
        <SectionHeader size="3xl">活動実績</SectionHeader>
        <Box my={10} textAlign="center">
          <Text color={loadingColor}>データを読み込み中...</Text>
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
          <Text color={errorColor}>エラーが発生しました: {error}</Text>
        </Box>
      </Container>
    )
  }

  return (
    <Container maxW="75%" py={12} mx="auto">
      <SectionHeader
        size="3xl"
      >
        活動実績
      </SectionHeader>

      <Box my={10}>
        {achievements.length === 0 ? (
          <Text textAlign="center" color={emptyDataColor}>表示するデータがありません</Text>
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
                      color={dateColor}
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
                      color={titleColor}
                  >
                      {achievement.title}
                    </Timeline.Title>
                    <Text color={summaryColor}>
                      {achievement.summary}
                    </Text>
                  </Timeline.Content>
                </Timeline.Item>
              ))}
            </Timeline.Root>
          </>
        )}
      </Box>
    </Container>
  )
}

export default AchievementList
