import React, { Suspense } from "react";
import { useAtom } from "jotai";
import {
    Container,
    Box,
    Text,
    Flex,
    Spinner,
    Alert,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import SectionHeader from "./common/SectionHeader";
import NewsCard from "./NewsCard";
import { ErrorBoundary } from "react-error-boundary";
import { newsAtom } from "@/atoms/news"; 

const NewsGrid = () => {
    const [newsList] = useAtom(newsAtom);
    const displayNews = newsList.slice(0, 3); 

    const cardBgColor = useColorModeValue("white", "gray.700");

    if (displayNews.length === 0) {
        return (
            <Box textAlign="center" py={10}>
                <Text>表示するニュースがありません</Text>
            </Box>
        );
    }

    return (
        <Flex
            wrap="wrap"
            gap={6}
            justify="center"
            direction={{ base: "column", md: "row" }}
            align="stretch"
        >
            {displayNews.map((news, index) => (
                <Box
                    key={index}
                    width={{ base: "100%", md: "calc(50% - 24px)", lg: "calc(33.333% - 24px)" }}
                    maxW="400px"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="sm"
                    bg={cardBgColor}
                    transition="all 0.3s"
                    _hover={{ transform: "translateY(-5px)", boxShadow: "md" }}
                >
                    <NewsCard
                        date={news.published}
                        imagesrc={news.thumbnail || "/imgs/jyogi.png"}
                        description={news.title}
                        link={news.link}
                    />
                </Box>
            ))}
        </Flex>
    );
};

const LoadingFallback = () => (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="300px">
        <Spinner size="xl" color="blue.500" thickness="4px" />
        <Text ml={4} fontSize="xl" color={useColorModeValue("gray.800", "gray.100")}>
            読み込み中...
        </Text>
    </Box>
);

const ErrorFallback = ({ error }) => (
    <Alert
        status="error" variant="subtle" flexDirection="column"
        alignItems="center" justifyContent="center" textAlign="center"
        rounded="md" py={6}
        bg={useColorModeValue("red.50", "red.900")}
        color={useColorModeValue("red.700", "red.200")}
    >
        <Alert.Icon boxSize="40px" mr={0} />
        <Alert.Title mt={4} mb={1} fontSize="lg">
            データの読み込みに失敗しました
        </Alert.Title>
        <Alert.Description maxWidth="sm">{error.message}</Alert.Description>
    </Alert>
);

const News = () => {
    return (
        <Container maxW="75%" py={8} mx={"auto"}>
            <SectionHeader
                size="4xl"
                buttontext="ニュース一覧を見る"
                buttonhref="/news"
            >
                最近のニュース
            </SectionHeader>
            <Box my={6}>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Suspense fallback={<LoadingFallback />}>
                        <NewsGrid />
                    </Suspense>
                </ErrorBoundary>
            </Box>
        </Container>
    );
};

export default News;
