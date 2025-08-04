import  { Suspense } from 'react';
import { useAtom } from 'jotai';
import {
    Container,
    Box,
    Text,
    Timeline,
    Spinner,
    Alert,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import SectionHeader from "./common/SectionHeader";
import { ErrorBoundary } from 'react-error-boundary';
import { achievementsAtom } from '@/atoms/achievements'; 

const AchievementTimeline = () => {
    const [achievements] = useAtom(achievementsAtom);
    const displayAchievements = achievements.slice(0, 5); 

    // 色設定
    const dateColor = useColorModeValue("gray.600", "gray.400");
    const titleColor = useColorModeValue("black", "white");
    const summaryColor = useColorModeValue("gray.700", "gray.300");
    const emptyDataColor = useColorModeValue("gray.600", "gray.400");
    const awardColor = useColorModeValue("yellow.400", "yellow.300");
    const defaultIndicatorColor = useColorModeValue("blue.500", "blue.400");

    if (displayAchievements.length === 0) {
        return (
            <Box my={10} textAlign="center">
                <Text color={emptyDataColor}>表示する活動実績がありません</Text>
            </Box>
        );
    }

    return (
        <Box my={10}>
            <Timeline.Root size='md' variant="subtle" colorScheme="blue">
                {displayAchievements.map((achievement) => (
                    <Timeline.Item key={achievement.id || achievement.title} mb={10}>
                         <Timeline.Content
                            flex="1"
                            width={{ base: "30%", md: "20%" }}
                            textAlign={{ base: "left", md: "right" }}
                            pr={{ base: 2, md: 4 }}
                        >
                            <Text fontSize={{ base: "xs", md: "sm" }} color={dateColor} fontWeight="medium">
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
                        <Timeline.Content flex="4" pl={{ base: 4, md: 6 }}>
                            <Timeline.Title fontWeight="bold" fontSize={{ base: "lg", md: "xl" }} mb={2} color={titleColor}>
                                {achievement.title}
                            </Timeline.Title>
                            <Text color={summaryColor} fontSize={{ base: "sm", md: "md" }}>
                                {achievement.summary}
                            </Text>
                        </Timeline.Content>
                    </Timeline.Item>
                ))}
            </Timeline.Root>
            <Box textAlign="center" mt={4} color="gray.500">
                <Text fontSize="sm" fontStyle="italic" color={summaryColor}>・</Text>
                <Text fontSize="sm" fontStyle="italic" color={summaryColor}>・</Text>
                <Text fontSize="sm" fontStyle="italic" color={summaryColor}>・</Text>
                <Text fontSize="sm" marginTop={8} color={summaryColor}>and more</Text>
            </Box>
        </Box>
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

const Achievement = () => {
    return (
        <Container maxW="75%" py={12} mx="auto">
            <SectionHeader size="3xl" buttontext="他の活動を見る" buttonhref="/activities">
                活動実績
            </SectionHeader>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Suspense fallback={<LoadingFallback />}>
                    <AchievementTimeline />
                </Suspense>
            </ErrorBoundary>
        </Container>
    );
};

export default Achievement;
