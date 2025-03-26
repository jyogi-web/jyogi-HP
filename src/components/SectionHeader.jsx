import React from "react";
import { Container, Heading, Button, Flex, Box } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { Link } from "react-router-dom";
/*
 * Containerで囲った中で使わないと横線が出ない？
 * @param {string} children  セクションのタイトル
 * @param {string} | null buttontext ボタンのテキスト
 * @param {string} buttonhref ボタンのリンク先
 * @param {string} size タイトルのサイズ
 *
 */

const SectionHeader = ({ children, buttontext, buttonhref, size = "2xl" }) => {
  const lineColor = useColorModeValue("gray.200", "gray.600");
  const headingColor = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="100%" py={8} mx={"auto"}>
      <Flex align="center" width="100%" mb={4}>
        <Heading size={size} mr={6} color={headingColor}>
          {children}
        </Heading>

        {buttontext && buttonhref && (
          <Box mr={6}>
            <Link to={buttonhref}>
              <Button colorScheme="blue" size="md">
                {buttontext}
              </Button>
            </Link>
          </Box>
        )}

        <Box flex="1" height="2px" bg={lineColor} />
      </Flex>
    </Container>
  );
};

export default SectionHeader;
