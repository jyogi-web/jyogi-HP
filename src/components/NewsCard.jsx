import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

const NewsCard = ({ date, imagesrc, description }) => {
  const textColor = useColorModeValue("gray.600", "gray.300");
  const descriptionColor = useColorModeValue("black", "white");

  return (
    <Box
      w="100%"
      p={0}
    >
      <Text
        fontSize="sm"
        color={textColor}
        fontWeight="medium"
        p={4}
        pb={2}
      >
        {date}
      </Text>

      <Box
        height="200px"
        width="100%"
        overflow="hidden"
      >
        <Image
          src={imagesrc || "https://via.placeholder.com/300x200?text=No+Image"}
          alt="news"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Box>

      <Box p={4}>
        <Text
          fontSize="md"
          lineHeight="1.5"
          noOfLines={3}
          overflow="hidden"
          color={descriptionColor}
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default NewsCard;
