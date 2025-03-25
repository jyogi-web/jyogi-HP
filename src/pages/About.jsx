import {
  Container,
  Flex,
  Box,
  Image,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="75%" py={8} mx={"auto"}>
      <Flex direction={{ base: "column", md: "row" }} gap={8} align="center">
        <Box flex="1" maxW={{ base: "100%", md: "50%" }}>
          <Image
            src="imgs/free-shuugou.jpeg"
            alt="jyogi集合写真"
            w="full"
            h="auto"
            objectFit="cover"
            rounded="md"
            shadow="md"
          />
        </Box>

        <Box flex="1" maxW={{ base: "100%", md: "50%" }} p={4}>
          <VStack align="center" spacing={6} width="100%">
            <Heading size="3xl" mb={4}>
              じょぎ(情報技術研究部)
            </Heading>
            <Box textAlign="center" width="100%">
              <Text fontWeight="bold" fontSize="2xl" mb={3}>
                部員数
              </Text>
              <Badge
                colorScheme="blue"
                fontSize="md"
                px={4}
                py={1.5}
                borderRadius="full"
              >
                121人
              </Badge>
            </Box>

            <Box textAlign="center" width="100%">
              <Text fontWeight="bold" fontSize="2xl" mb={3}>
                活動内容
              </Text>
              <Flex width="100%" justify='center' flexWrap="wrap" gap={4}>
                <VStack align="start" spacing={2} minW="120px">
                  <Text fontSize="md">・週1回の部会への参加</Text>
                  <Text fontSize="md">・部室での開発（自由）</Text>
                  <Text fontSize="md">・ゲーム開発</Text>
                  <Text fontSize="md">・Web開発</Text>
                </VStack>
                <VStack align="start" spacing={2} minW="120px">
                  <Text fontSize="md">・イベントへの参加</Text>
                  <Text fontSize="md">・部内ゲームイベント</Text>
                  <Text fontSize="md">・部員旅行</Text>
                </VStack>
              </Flex>
            </Box>

            <Box textAlign="center" width="100%">
              <Text fontWeight="bold" fontSize="2xl" mb={3}>
                年間予定
              </Text>
              <VStack align="center" spacing={2} width="100%">
                <Text fontSize="md">・4月：新入部員歓迎会</Text>
                <Text fontSize="md">・9月：部員旅行</Text>
                <Text fontSize="md">・11月：立花祭展示</Text>
              </VStack>
            </Box>
          </VStack>{" "}
        </Box>
      </Flex>
    </Container>
  );
};

export default About;
