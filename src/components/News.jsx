import React from "react";
import { Container, Box, Text, Image, Flex, Spinner, Center, Alert } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import SectionHeader from "./common/SectionHeader";
import NewsCard from "./NewsCard";
import useNews from "@/hooks/useNews";

const News = () => {
  const { newsList, isLoading, error } = useNews(3);

  // Dark mode support
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const cardBgColor = useColorModeValue("white", "gray.700");
  
  return (
    <Container maxW="75%" py={8} mx={"auto"}>
      <SectionHeader
        size="4xl"
        buttontext="ニュース一覧を見る"
        buttonhref="/news"
      >
        最近のニュース
      </SectionHeader>
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 2 }}
        justify="space-between"
        align="stretch"
      >
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
          <Flex wrap="wrap" gap={6} justify="center">
            {newsList.map((news, index) => (
              <Box
                key={index}
                width={{
                  base: "100%",
                  md: "calc(50% - 32px)",
                  lg: "calc(33.333% - 32px)",
                }}
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
                maxW="400px"
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
          </Flex>
        ) : (
          <Center py={10} bg={cardBgColor} borderRadius="md" shadow="sm">
            <Text fontSize="lg" color={textColor}>
              表示するニュースがありません
            </Text>
          </Center>
        )}
      </Flex>
    </Container>
  );
};

export default News;
