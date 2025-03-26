import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

const NewsCard = ({ date, imagesrc, description }) => {
  const bgColor = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const descriptionColor = useColorModeValue("black", "white");
  const shadowColor = useColorModeValue("sm", "lg");

  return (
    <Box
      flex="1"
      maxW={{ base: "100%", md: "45%" }}
      mx={2}
      mb={4}
      p={3}
      borderRadius="md"
      boxShadow={shadowColor}
      bg={bgColor}
    >
      <Text
        fontSize="sm"
        color={textColor}
        fontWeight="medium"
        mb={2}
      >
        {date}
      </Text>

      <Box
        height="200px"
        width="100%"
        overflow="hidden"
        borderRadius="md"
        mb={3}
      >
        <Image
          src={imagesrc || "https://via.placeholder.com/300x200?text=No+Image"}
          alt="news"
          w="100%"
          h="100%"
          objectFit="cover"
          rounded="md"
          shadow="md"
        />
      </Box>

      <Text
        fontSize="md"
        lineHeight="1.5"
        // 3行以上は省略する
        noOfLines={3}
        overflow="hidden"
        color={descriptionColor}
      >
        {description}
      </Text>
    </Box>
  );
};

export default NewsCard;
