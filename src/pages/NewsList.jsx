import React from 'react';
import { Container, Flex, Box, Text, Image } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import SectionHeader from "@/components/common/SectionHeader";
import NewsCard from "@/components/NewsCard";
import Seo from "@/components/common/Seo";

const newsItems = [
    {
        date: "2024/09/18",
        imagesrc: "imgs/ignore/fusic.jpg",
        description: "株式会社Fusicさんのオフィスで、web講座を開催していただきました。"
    },
    {
        date: "2024/09/16",
        imagesrc: "imgs/ignore/yanbaru.JPG",
        description: "やんばるハックツハッカソンに参加しました。"
    },
    {
        date: "2024/09/06",
        imagesrc: "imgs/ignore/dazaifu.jpg",
        description: "太宰府天満宮に日帰り旅行に行ってきました。"
    }
];

const NewsList = () => {
    // Dark mode support
    const bgColor = useColorModeValue("gray.50", "gray.900");
    const textColor = useColorModeValue("gray.800", "gray.100");

    return (
        <>
            <Seo
                title="ニュース | 情報技術研究部 じょぎ"
                description="福岡工業大学情報技術研究部（じょぎ）の最新ニュースや活動報告を紹介しています。"
                image="/imgs/jyogi.png"
            />

            <Container maxW="75%" py={12} mx="auto">
                <SectionHeader size="3xl">
                    ニュース一覧
                </SectionHeader>

                <Box my={10}>
                    <Flex
                        wrap="wrap"
                        gap={6}
                        justify="center"
                    >
                        {newsItems.map((news, index) => (
                            <Box
                                key={index}
                                width={{ base: "100%", md: "calc(50% - 32px)", lg: "calc(33.333% - 32px)" }}
                                borderWidth="1px"
                                borderRadius="lg"
                                overflow="hidden"
                                boxShadow="sm"
                                bg={useColorModeValue("white", "gray.700")}
                                transition="all 0.3s"
                                _hover={{
                                    transform: "translateY(-5px)",
                                    boxShadow: "md",
                                }}
                                maxW="400px"
                                mb={4}
                            >
                                <NewsCard
                                    date={news.date}
                                    imagesrc={news.imagesrc}
                                    description={news.description}
                                />
                            </Box>
                        ))}
                    </Flex>
                </Box>
            </Container>
        </>
    );
};

export default NewsList;
