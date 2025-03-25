import React from 'react'
import { Container, Box, Text, Image, Flex, Timeline } from "@chakra-ui/react";
import SectionHeader from "./SectionHeader";

const Achievement = () => {
  return (
    <Container maxW="75%" py={8} mx={"auto"}>
      <SectionHeader
        size="4xl"
        buttontext={"他の活動を見る"}
        buttonhref={"/activities"}
      >
        活動実績
      </SectionHeader>
      
      <Box my={6}>
        <Text fontSize="lg" mb={8} textAlign="center">
          プログラミングイベントでも成果など
        </Text>
        
        <Timeline.Root size='xl' variant="subtle" mt={10} mb={10}>
          <Timeline.Item mb={12}>
            <Timeline.Content flex="1" />
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator boxSize={6} />
            </Timeline.Connector>
            <Timeline.Content flex="1" pl={6}>
              <Timeline.Title fontWeight="bold" fontSize="xl" mb={2}>2024年9月 ハッカソン最優秀賞</Timeline.Title>
              <Text>チーム「じょぎ」がやんばるハックツハッカソンで最優秀賞を受賞しました。</Text>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item mb={12}>
            <Timeline.Content flex="1" alignItems="flex-end" pr={6}>
              <Timeline.Title fontWeight="bold" fontSize="xl" mb={2}>2024年月 アプリコンテスト入賞</Timeline.Title>
              <Text textAlign="right">学内アプリコンテストで3名の部員が入賞しました。</Text>
            </Timeline.Content>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator boxSize={6} />
            </Timeline.Connector>
            <Timeline.Content flex="1" />
          </Timeline.Item>

          <Timeline.Item mb={12}>
            <Timeline.Content flex="1" />
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator boxSize={6} />
            </Timeline.Connector>
            <Timeline.Content flex="1" pl={6}>
              <Timeline.Title fontWeight="bold" fontSize="xl" mb={2}>2022年11月 ゲーム展示会</Timeline.Title>
              <Text>立花祭で部員制作のゲーム5作品を展示し、多くの来場者に楽しんでいただきました。</Text>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline.Root>
      </Box>
    </Container>
  )
}

export default Achievement