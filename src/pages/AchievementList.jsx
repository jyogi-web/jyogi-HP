import React, { useState, useMemo } from 'react'
import { Container, Box, Text, Timeline, Flex } from "@chakra-ui/react"
import { useColorModeValue } from "@/components/ui/color-mode"
import SectionHeader from "@/components/common/SectionHeader"
import { useAchievement } from "@/hooks/useAchievement"

const AchievementList = () => {
  const { achievements, isLoading, error } = useAchievement();
  const [selectedYear, setSelectedYear] = useState('all');

  // 受賞のインジケーター色
  const awardColor = useColorModeValue("yellow.400", "yellow.300");
  const defaultIndicatorColor = useColorModeValue("blue.500", "blue.400");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const errorColor = useColorModeValue("red.500", "red.300");

  // 利用可能な年度一覧を取得
  const availableYears = useMemo(() => {
    if (!achievements.length) return [];

    const years = [...new Set(achievements.map(achievement =>
      achievement.date.split('/')[0]
    ))];

    return years.sort((a, b) => parseInt(b) - parseInt(a));
  }, [achievements]);

  // 選択された年度でフィルタリング
  const filteredAchievements = useMemo(() => {
    if (selectedYear === 'all') return achievements;

    return achievements.filter(achievement =>
      achievement.date.split('/')[0] === selectedYear
    );
  }, [achievements, selectedYear]);

  // ローディング状態の表示
  if (isLoading) {
    return (
      <Container maxW="75%" py={12} mx="auto">
        <SectionHeader size="3xl">活動実績</SectionHeader>
        <Box my={10} textAlign="center">
          <Text color={textColor}>データを読み込み中...</Text>
        </Box>
      </Container>
    );
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
    );
  }

  return (
    <Container maxW="75%" py={12} mx="auto">
      <SectionHeader size="3xl">
        活動実績
      </SectionHeader>

      {/* 年度選択プルダウン */}
      {availableYears.length > 0 && (
        <Flex justify="flex-end" mb={6}>
          <Box width="200px">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid #E2E8F0',
                backgroundColor: 'white',
                fontSize: '14px',
                color: '#2D3748'
              }}
            >
              <option value="all">全ての年度</option>
              {availableYears.map(year => (
                <option key={year} value={year}>
                  {year}年
                </option>
              ))}
            </select>
          </Box>
        </Flex>
      )}

      <Box my={10}>
        {filteredAchievements.length === 0 ? (
          <Text textAlign="center" color={textColor}>
            {selectedYear === 'all' ? '表示するデータがありません' : `${selectedYear}年のデータがありません`}
          </Text>
        ) : (
          <Timeline.Root
            size='md'
            variant="subtle"
            colorScheme="blue"
          >
            {filteredAchievements.map((achievement, index) => (
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
                    bg={achievement.hasAward ? awardColor : defaultIndicatorColor}
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
        )}
      </Box>
    </Container >
  );
};

export default AchievementList;
