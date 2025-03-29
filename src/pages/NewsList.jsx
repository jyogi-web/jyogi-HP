import React from "react";
import { Container, Grid, Box, Text, Spinner, Center, Alert } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import SectionHeader from "@/components/common/SectionHeader";
import NewsCard from "@/components/NewsCard";
import Seo from "@/components/common/Seo";
import useNews from "@/hooks/useNews";

const NewsList = () => {
  const { newsList, isLoading, error } = useNews();

  // Dark mode support
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const cardBgColor = useColorModeValue("white", "gray.700");

  return (
    <>
      <Seo
        title="ニュース | 情報技術研究部 じょぎ"
        description="福岡工業大学情報技術研究部（じょぎ）の最新ニュースや活動報告を紹介しています。"
        image="/imgs/jyogi.png"
      />

      <Container maxW="75%" py={12} mx="auto">
        <SectionHeader size="3xl">ニュース一覧</SectionHeader>

        {/* ローディング状態 */}
        {isLoading ? (
          <Container maxW="container.xl" py={10} textAlign="center">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="300px"
            >
              <Spinner size="xl" color="blue.500" thickness="4px" />
              <Text ml={4} fontSize="xl" color={textColor}>
                データを読み込み中...
              </Text>
            </Box>
          </Container>
        ) : error ? (
          <Container maxW="container.xl" py={10}>
            <Alert
              status="error"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              rounded="md"
              py={6}
              bg={useColorModeValue("red.50", "red.900")}
              color={useColorModeValue("red.700", "red.200")}
            >
              <Alert.Icon boxSize="40px" mr={0} />
              <Alert.Title mt={4} mb={1} fontSize="lg">
                データの読み込みに失敗しました
              </Alert.Title>
              <Alert.Description maxWidth="sm">{error}</Alert.Description>
            </Alert>
          </Container>
        ) : newsList && newsList.length > 0 ? (
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)"
            }}
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
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "md",
                }}
                mb={4}
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
        ) : (
          <Center py={10} bg={cardBgColor} borderRadius="md" shadow="sm">
            <Text fontSize="lg" color={textColor}>
              表示するニュースがありません
            </Text>
          </Center>
        )}
      </Container>
    </>
  );
};

export default NewsList;
