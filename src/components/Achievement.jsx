import React from 'react'
import { Container, Box, Text, Timeline } from "@chakra-ui/react"
import { useColorModeValue } from "@/components/ui/color-mode";
import SectionHeader from "./common/SectionHeader"
import { useAchievement } from "@/hooks/useAchievement";

const Achievement = () => {
  const { achievements, isLoading, error } = useAchievement(5);// 最新5件のみ表示

  // ダークモード対応の色設定
  const dateColor = useColorModeValue("gray.600", "gray.400")
  const titleColor = useColorModeValue("black", "white")
  const summaryColor = useColorModeValue("gray.700", "gray.300")
  const errorColor = useColorModeValue("red.500", "red.300")
  const loadingColor = useColorModeValue("gray.600", "gray.400")
  const emptyDataColor = useColorModeValue("gray.600", "gray.400")

  // 受賞のインジケーター色
  const awardColor = useColorModeValue("yellow.400", "yellow.300")
  const defaultIndicatorColor = useColorModeValue("blue.500", "blue.400")

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
        buttontext="他の活動を見る"
        buttonhref="/activities"
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
                  <Timeline.Content
                    flex="1"
                    width={{ base: "30%", md: "20%" }}
                    textAlign={{ base: "left", md: "right" }}
                    pr={{ base: 2, md: 4 }}
                  >
                    <Text
                      fontSize={{ base: "xs", md: "sm" }}
                      color={dateColor}
                      fontWeight="medium"
                    >
                      {achievement.date}
                    </Text>
                  </Timeline.Content>
                  <Timeline.Connector>
                    <Timeline.Separator />
                    <Timeline.Indicator
                      boxSize={{ base: 4, md: 5 }}
                      bg={achievement.hasAward ? awardColor : defaultIndicatorColor}
                    />
                  </Timeline.Connector>
                  <Timeline.Content
                    flex="4"
                    pl={{ base: 4, md: 6 }}
                  >
                    <Timeline.Title
                      fontWeight="bold"
                      fontSize={{ base: "lg", md: "xl" }}
                      mb={2}
                      color={titleColor}
                    >
                      {achievement.title}
                    </Timeline.Title>
                    <Text
                      color={summaryColor}
                      fontSize={{ base: "sm", md: "md" }}
                    >
                      {achievement.summary}
                    </Text>
                  </Timeline.Content>
                </Timeline.Item>
              ))}
            </Timeline.Root>
            <Box textAlign="center" mt={4} color="gray.500">
              <Text fontSize="sm" fontStyle="italic" color={summaryColor}>
                ・
              </Text>
              <Text fontSize="sm" fontStyle="italic" color={summaryColor}>
                ・
              </Text>
              <Text fontSize="sm" fontStyle="italic" color={summaryColor}>
                ・
              </Text>
              <Text fontSize="sm" marginTop={8} color={summaryColor}>
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
