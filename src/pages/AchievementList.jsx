import  { useState, useMemo, Suspense } from 'react';
import { useAtom } from 'jotai';
import {
    Container,
    Box,
    Text,
    Timeline,
    Flex,
    Spinner,
    Alert,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import SectionHeader from "@/components/common/SectionHeader";
import { ErrorBoundary } from 'react-error-boundary';
import { achievementsAtom } from '@/atoms/achievements'; 

const FilterableAchievementList = () => {
    const [achievements] = useAtom(achievementsAtom);
    const [selectedYear, setSelectedYear] = useState('all');

    // 色設定
    const awardColor = useColorModeValue("yellow.400", "yellow.300");
    const defaultIndicatorColor = useColorModeValue("blue.500", "blue.400");
    const textColor = useColorModeValue("gray.600", "gray.400");

    const availableYears = useMemo(() => {
        if (!achievements.length) return [];
        const years = [...new Set(achievements.map(a => a.date.split('/')[0]))];
        return years.sort((a, b) => parseInt(b) - parseInt(a));
    }, [achievements]);

    const filteredAchievements = useMemo(() => {
        if (selectedYear === 'all') return achievements;
        return achievements.filter(a => a.date.split('/')[0] === selectedYear);
    }, [achievements, selectedYear]);

    return (
        <>
            {availableYears.length > 0 && (
                <Flex justify="flex-end" mb={6}>
                    <Box as="select"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        width="200px" p="8px 12px" borderRadius="6px"
                        border="1px solid" borderColor="inherit"
                        bg={useColorModeValue("white", "gray.700")}
                    >
                        <option value="all">全ての年度</option>
                        {availableYears.map(year => (
                            <option key={year} value={year}>{year}年度</option>
                        ))}
                    </Box>
                </Flex>
            )}

            <Box my={10}>
                {filteredAchievements.length === 0 ? (
                    <Text textAlign="center" color={textColor}>
                        {selectedYear === 'all' ? '表示するデータがありません' : `${selectedYear}年度のデータがありません`}
                    </Text>
                ) : (
                    <Timeline.Root size='md' variant="subtle" colorScheme="blue">
                        {filteredAchievements.map((achievement, index) => (
                           <Timeline.Item key={index} mb={10}>
                                <Timeline.Content flex="1" width="20%" textAlign="right" pr={4}>
                                    <Text fontSize="sm" color="gray.600" fontWeight="medium">
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
                                    <Timeline.Title fontWeight="bold" fontSize="xl" mb={2}>
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
        </>
    );
};

const ErrorFallback = ({ error }) => (
    <Alert
        status="error" variant="subtle" flexDirection="column" alignItems="center"
        justifyContent="center" textAlign="center" rounded="md" py={6}
        bg={useColorModeValue("red.50", "red.900")}
        color={useColorModeValue("red.700", "red.200")}
    >
        <Alert.Icon boxSize="40px" mr={0} />
        <Alert.Title mt={4} mb={1} fontSize="lg">データの読み込みに失敗</Alert.Title>
        <Alert.Description maxWidth="sm">{error.message}</Alert.Description>
    </Alert>
);

const LoadingFallback = () => (
    <Box my={10} textAlign="center" display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <Spinner size="xl" color="blue.500" thickness="4px" />
        <Text ml={4} fontSize="xl" color={useColorModeValue("gray.600", "gray.400")}>
            読み込み中...
        </Text>
    </Box>
);

const AchievementList = () => {
    return (
        <Container maxW="75%" py={12} mx="auto">
            <SectionHeader size="3xl">活動実績</SectionHeader>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Suspense fallback={<LoadingFallback />}>
                    <FilterableAchievementList />
                </Suspense>
            </ErrorBoundary>
        </Container>
    );
};

export default AchievementList;
