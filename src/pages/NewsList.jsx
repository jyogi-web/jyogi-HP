import React, { Suspense } from "react";
import { useAtom } from "jotai";
import {
    Container,
    Grid,
    Box,
    Text,
    Spinner,
    Alert,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import SectionHeader from "@/components/common/SectionHeader";
import NewsCard from "@/components/NewsCard";
import Seo from "@/components/common/Seo";
import { ErrorBoundary } from "react-error-boundary";
import { newsAtom } from "@/atoms/news"; // 作成したアトムをインポート

// データ表示部分
const FullNewsGrid = () => {
    const [newsList] = useAtom(newsAtom);
    const cardBgColor = useColorModeValue("white", "gray.700");

    if (newsList.length === 0) {
        return (
            <Box textAlign="center" py={10}>
                <Text>表示するニュースがありません</Text>
            </Box>
        );
    }

    return (
        <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            gap={6}
            justifyItems="center"
        >
            {newsList.map((news, index) => (
                <Box
                    key={index}
                    width="100%"
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
                        imagesrc={news.thumbnail || "/imgs/news-placeholder.png"}
                        description={news.title}
                        link={news.link}
                    />
                </Box>
            ))}
        </Grid>
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

const NewsList = () => {
    return (
        <>
            <Seo
                title="ニュース | 情報技術研究部 じょぎ"
                description="福岡工業大学情報技術研究部（じょぎ）の最新ニュースや活動報告を紹介しています。"
            />
            <Container maxW="75%" py={12} mx="auto">
                <SectionHeader size="3xl">ニュース一覧</SectionHeader>
                <Box my={6}>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <Suspense fallback={<LoadingFallback />}>
                            <FullNewsGrid />
                        </Suspense>
                    </ErrorBoundary>
                </Box>
            </Container>
        </>
    );
};

export default NewsList;
