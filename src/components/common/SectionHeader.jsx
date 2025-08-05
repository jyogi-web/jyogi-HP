import { Container, Heading, Button, Flex, Box } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { Link } from "react-router-dom";

const SectionHeader = ({ children, buttontext, buttonhref, size = "2xl" }) => {
  const lineColor = useColorModeValue("gray.200", "gray.600");
  const headingColor = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="100%" py={{ base: 6, md: 8 }} mx={"auto"}>
      <Flex
        align="center"
        width="100%"
        mb={4}
        direction={{ base: "column", sm: "row" }}
        gap={{ base: 4, sm: 0 }}
      >
        <Heading
          size={size}
          mr={{ base: 0, sm: 6 }}
          color={headingColor}
          textAlign={{ base: "center", sm: "left" }}
          mb={{ base: 2, sm: 0 }}
        >
          {children}
        </Heading>

        {buttontext && buttonhref && (
          <Box mr={{ base: 0, sm: 6 }} order={{ base: 3, sm: 2 }}>
            <Link to={buttonhref}>
              <Button
                colorScheme="blue"
                size="md"
                w={{ base: "full", sm: "auto" }}
              >
                {buttontext}
              </Button>
            </Link>
          </Box>
        )}

        <Box
          flex="1"
          height="2px"
          bg={lineColor}
          display={{ base: "none", sm: "block" }}
          order={{ base: 2, sm: 3 }}
        />
      </Flex>
    </Container>
  );
};

export default SectionHeader;
