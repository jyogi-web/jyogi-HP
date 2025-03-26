import {
    Container,
    Link,
    Text,
    Flex,
    Box,
    VStack,
    HStack,
    Heading,
    Icon,
    Button,
    SimpleGrid,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import {
    FaTwitter,
    FaGithub,
    FaEnvelope,
    FaMapMarkerAlt,
    FaExternalLinkAlt
} from "react-icons/fa";
import React from "react";

const Footer = () => {
    // Googleフォームの埋め込みURL
    const googleFormUrl = "https://forms.gle/oMww1rnix5eqt8bAA";

    const bgColor = useColorModeValue("gray.700", "gray.900");
    const textColor = "white";
    const borderColor = useColorModeValue("whiteAlpha.300", "whiteAlpha.200");
    const boxBgColor = useColorModeValue("whiteAlpha.100", "whiteAlpha.50");
    const accentColor = "blue.300";
    const copyrightColor = useColorModeValue("gray.400", "gray.500");

    return (
        <Box as="footer" bg={bgColor} color={textColor} py={10}>
            <Container maxW="container.xl">
                <Flex
                    direction={{ base: "column", md: "row" }}
                    justify="space-between"
                    gap={10}
                >
                    {/* 左側：情報セクション */}
                    <Box flex={1.5} ml={5}>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                            {/* サークル情報 */}
                            <VStack align="flex-start" spacing={4}>
                                <Heading as="h3" size="md" fontWeight="bold" mb={2}>
                                    情報技術研究部
                                </Heading>

                                <HStack spacing={2} align="flex-start">
                                    <Icon as={FaMapMarkerAlt} color={accentColor} mt={1} />
                                    <Text fontSize="sm">
                                        〒811-0295 福岡県福岡市東区和白東３丁目３０−１
                                        <br />
                                        サークル棟3F 321・322
                                    </Text>
                                </HStack>

                                <HStack spacing={2}>
                                    <Icon as={FaEnvelope} color={accentColor} />
                                    <Text fontSize="sm">jyogi@bene.fit.ac.jp</Text>
                                </HStack>
                            </VStack>
                        </SimpleGrid>

                        {/* SNSリンク */}
                        <Heading as="h3" size="md" fontWeight="bold" mt={8} mb={4}>
                            フォローする
                        </Heading>

                        <HStack spacing={6} pt={2}>
                            <Link href="https://x.com/jyogi_pr" isExternal>
                                <HStack
                                    spacing={1}
                                    color={textColor}
                                    _hover={{
                                        color: accentColor,
                                        transform: "translateY(-2px)",
                                        transition: "all 0.2s ease",
                                    }}
                                    transition="all 0.2s ease"
                                >
                                    <Icon as={FaTwitter} boxSize={6} />
                                    <Text fontSize="sm">Twitter</Text>
                                </HStack>
                            </Link>
                            <Link href="https://github.com/jyogi-web" isExternal>
                                <HStack
                                    spacing={1}
                                    color={textColor}
                                    _hover={{
                                        color: accentColor,
                                        transform: "translateY(-2px)",
                                        transition: "all 0.2s ease",
                                    }}
                                    transition="all 0.2s ease"
                                >
                                    <Icon as={FaGithub} boxSize={6} />
                                    <Text fontSize="sm">GitHub</Text>
                                </HStack>
                            </Link>
                        </HStack>
                    </Box>

                    {/* 右側：Googleフォームリンク */}
                    <Box
                        flex={1}
                        p={6}
                        bg={boxBgColor}
                        borderRadius="md"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                    >
                        <VStack align="center" spacing={6}>
                            <Heading as="h3" size="md" color={accentColor} textAlign="center">
                                興味を持ったら入部申し込み！
                            </Heading>

                            <Text textAlign="center" fontSize="sm" mb={2}>
                                部活動に興味がある方は、下のボタンからGoogleフォームで簡単に入部申し込みができます。
                                質問や見学希望の方は、部室へお気軽にどうぞ！
                            </Text>

                            <Link
                                href={googleFormUrl}
                                isExternal
                                _hover={{ textDecoration: "none" }}
                                w={{ base: "100%", md: "80%" }}
                            >
                                <Button
                                    rightIcon={<FaExternalLinkAlt />}
                                    colorScheme="blue"
                                    size="lg"
                                    w="100%"
                                    height="60px"
                                    fontSize="md"
                                    fontWeight="bold"
                                    shadow="md"
                                    _hover={{
                                        transform: "translateY(-2px)",
                                        shadow: "lg",
                                    }}
                                    transition="all 0.2s"
                                >
                                    入部申し込みフォームへ
                                </Button>
                            </Link>
                        </VStack>
                    </Box>
                </Flex>

                <Box pt={8} mt={6} borderTopWidth="1px" borderColor={borderColor}>
                    <Text fontSize="sm" color={copyrightColor} textAlign="center">
                        ©2024 情報技術研究部. All rights reserved.
                    </Text>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
