import {
  Container,
  Flex,
  Box,
  Image,
  Heading,
  Text,
  VStack,
  Badge,
  SimpleGrid,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

const About = () => {
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const imageShadow = useColorModeValue("md", "dark-lg");
  const boxBg = useColorModeValue("white", "gray.800");
  const boxShadow = useColorModeValue("sm", "md");

  return (
    <Container maxW="75%" py={{ base: 6, md: 8 }} mx={"auto"}>
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={{ base: 6, md: 8 }}
        align="center"
      >
        <Box
          flex="1"
          maxW={{ base: "100%", md: "50%" }}
          mb={{ base: 4, md: 0 }}
        >
          <Image
            src="imgs/free-shuugou.jpeg"
            alt="jyogi集合写真"
            w="full"
            h="auto"
            objectFit="cover"
            rounded="md"
            shadow={imageShadow}
          />
        </Box>

        <Box
          flex="1"
          maxW={{ base: "100%", md: "50%" }}
          p={{ base: 3, md: 4 }}
          bg={boxBg}
          borderRadius="md"
          shadow={boxShadow}
        >
          <VStack align="center" spacing={{ base: 4, md: 6 }} width="100%">
            <Heading
              size={{ base: "2xl", md: "3xl" }}
              mb={{ base: 2, md: 4 }}
              color={headingColor}
              textAlign="center"
            >
              じょぎ(情報技術研究部)
            </Heading>
            <Box textAlign="center" width="100%">
              <Text fontWeight="bold" fontSize="2xl" mb={3} color={headingColor}>
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
              <Text fontWeight="bold" fontSize="2xl" mb={3} color={headingColor}>
                活動内容
              </Text>

              {/* PCとタブレット向けの表示 */}
              <SimpleGrid
                columns={2}
                spacing={4}
                display={{ base: "none", md: "grid" }}
                mx="auto"
                maxW="400px"
              >
                <VStack align="start" spacing={2}>
                  <Text fontSize="md" color={textColor}>・週1回の部会への参加</Text>
                  <Text fontSize="md" color={textColor}>・部室での開発（自由）</Text>
                  <Text fontSize="md" color={textColor}>・ゲーム開発</Text>
                  <Text fontSize="md" color={textColor}>・Web開発</Text>
                </VStack>
                <VStack align="start" spacing={2}>
                  <Text fontSize="md" color={textColor}>・イベントへの参加</Text>
                  <Text fontSize="md" color={textColor}>・部内ゲームイベント</Text>
                  <Text fontSize="md" color={textColor}>・部員旅行</Text>
                </VStack>
              </SimpleGrid>

              {/* スマホ向けの表示 */}
              <Box
                display={{ base: "block", md: "none" }}
                textAlign="left"
                width="70%"
                mx="auto"
              >
                <VStack align="start" spacing={2}>
                  <Text fontSize="md" color={textColor}>・週1回の部会への参加</Text>
                  <Text fontSize="md" color={textColor}>・部室での開発（自由）</Text>
                  <Text fontSize="md" color={textColor}>・ゲーム開発</Text>
                  <Text fontSize="md" color={textColor}>・Web開発</Text>
                  <Text fontSize="md" color={textColor}>・イベントへの参加</Text>
                  <Text fontSize="md" color={textColor}>・部内ゲームイベント</Text>
                  <Text fontSize="md" color={textColor}>・部員旅行</Text>
                </VStack>
              </Box>
            </Box>

            <Box textAlign="center" width="100%">
              <Text fontWeight="bold" fontSize="2xl" mb={3} color={headingColor}>
                年間予定
              </Text>
              {/* PCとタブレット向けの表示 */}
              <Box
                display={{ base: "none", md: "block" }}
                width="fit-content"
                mx="auto"
              >
                <VStack align="start" spacing={2}>
                  <Text fontSize="md" color={textColor}>・4月：新入部員歓迎会</Text>
                  <Text fontSize="md" color={textColor}>・9月：部員旅行</Text>
                  <Text fontSize="md" color={textColor}>・11月：立花祭展示</Text>
                </VStack>
              </Box>

              {/* スマホ向けの表示 */}
              <Box
                display={{ base: "block", md: "none" }}
                textAlign="left"
                width="70%"
                mx="auto"
              >
                <VStack align="start" spacing={2}>
                  <Text fontSize="md" color={textColor}>・4月：新入部員歓迎会</Text>
                  <Text fontSize="md" color={textColor}>・9月：部員旅行</Text>
                  <Text fontSize="md" color={textColor}>・11月：立花祭展示</Text>
                </VStack>
              </Box>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default About;
