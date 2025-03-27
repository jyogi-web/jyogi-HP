import React from "react";
import { Container, Box, Text, Image, Flex } from "@chakra-ui/react";
import SectionHeader from "./common/SectionHeader";
import NewsCard from "./NewsCard";

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
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 2 }}
        justify="space-between"
        align="stretch"
      >
        <NewsCard
          date="2024/09/18"
          imagesrc="imgs/ignore/fusic.jpg"
          description="株式会社Fusicさんのオフィスで、web講座を開催していただきました。"
        />
        <NewsCard
          date="2024/09/16"
          imagesrc="imgs/ignore/yanbaru.JPG"
          description="やんばるハックツハッカソンに参加しました。"
        />
        <NewsCard
          date="2024/09/06"
          imagesrc="imgs/ignore/dazaifu.jpg"
          description="太宰府天満宮に日帰り旅行に行ってきました。"
        />
      </Flex>
    </Container>
  );
};

export default News;
