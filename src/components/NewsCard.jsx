import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

const NewsCard = ({date, imagesrc, description}) => {
  return (
    <Box 
      flex="1" 
      maxW={{ base: "100%", md: "45%" }}
      mx={2}
      mb={4}
      p={3} 
      borderRadius="md"
      boxShadow="sm"
      bg="white"
    >
      <Text 
        fontSize="sm" 
        color="gray.600" 
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
        noOfLines={3} // 3行以上は省略する
        overflow="hidden"
      >
        {description}
      </Text>
    </Box>
  );
};

export default NewsCard;