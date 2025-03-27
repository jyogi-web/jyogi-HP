import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

const NewsCard = ({ date, imagesrc, description, link=null }) => {
  const textColor = useColorModeValue("gray.600", "gray.300");
  const descriptionColor = useColorModeValue("black", "white");
  const bgHoverColor = useColorModeValue("gray.50", "gray.700");
  
  const handleClick = () => {
    if (link) {
      // 新しいタブでリンクを開く
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Box
      w="100%"
      p={0}
      cursor={link ? "pointer" : "default"}
      onClick={handleClick}
      transition="all 0.2s"
      _hover={{
        bg: link ? bgHoverColor : "initial",
        transform: link ? "translateY(-2px)" : "none",
      }}
      position="relative"
    >
      <Text
        fontSize="sm"
        color={textColor}
        fontWeight="medium"
        p={4}
        pb={2}
      >
        {typeof date === 'object' && date instanceof Date 
          ? date.toLocaleDateString('ja-JP')
          : date}
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
          transition="transform 0.3s"
          _groupHover={{ transform: "scale(1.05)" }}
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
