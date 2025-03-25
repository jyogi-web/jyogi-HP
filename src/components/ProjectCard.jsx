import PropTypes from 'prop-types';
import {
  Box,
  Image,
  Heading,
  Text,
  Stack,
  Badge,
  HStack,
  Link,
  Button
} from '@chakra-ui/react';
import { useColorMode } from "@/components/ui/color-mode";
import { FaGithub, FaYoutube, FaExternalLinkAlt, FaNewspaper } from 'react-icons/fa';

const ProjectCard = ({
  title,
  author,
  technologies,
  youtubeUrl,
  description,
  deployLink,
  githubLink,
  articleLink
}) => {
  const getYoutubeThumbnail = (url) => {
    if (!url) return null;

    const videoId = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);

    if (videoId && videoId[1]) {

      return `https://img.youtube.com/vi/${videoId[1]}/hqdefault.jpg`;
    }

    return null;
  };

  const thumbnailUrl = getYoutubeThumbnail(youtubeUrl);
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'light' ? 'white' : 'gray.800';
  const borderColor = colorMode === 'light' ? 'gray.200' : 'gray.700';

  return (
    <Box
      maxW={'350px'}
      w={'full'}
      bg={bgColor}
      boxShadow={'md'}
      rounded={'lg'}
      p={6}
      overflow={'hidden'}
      borderWidth="1px"
      borderColor={borderColor}
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'lg',
      }}
    >
      {thumbnailUrl ? (
        <Box
          h={'200px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          <Image
            src={thumbnailUrl}
            alt={`${title} thumbnail`}
            fit="cover"
            w="full"
            h="full"
          />
        </Box>
      ) : (
        <Box
          h={'200px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="gray.500"
        >
          No thumbnail available
        </Box>
      )}

      <Heading
        fontSize={'xl'}
        fontWeight={500}
        fontFamily={'body'}
        noOfLines={1}
      >
        {title}
      </Heading>

      <Text color={'gray.500'} fontSize={'sm'} mt={2}>
        作成者: {author}
      </Text>

      <Stack direction={'row'} mt={2} flexWrap="wrap" gap={1}>
        {technologies.map((tech, index) => (
          <Badge key={index} colorScheme="blue" fontSize={'xs'}>
            {tech}
          </Badge>
        ))}
      </Stack>

      {description && (
        <Text color={'gray.600'} mt={3} fontSize={'sm'} noOfLines={3}>
          {description}
        </Text>
      )}

      <Stack mt={4} direction={'column'} spacing={2}>
        {youtubeUrl && (
          <Button
            as={Link}
            href={youtubeUrl}
            isExternal
            leftIcon={<FaYoutube />}
            colorScheme="red"
            size="sm"
            _hover={{
              textDecoration: 'none'
            }}
          >
            YouTube
          </Button>
        )}

        {deployLink && (
          <Button
            as={Link}
            href={deployLink}
            isExternal
            leftIcon={<FaExternalLinkAlt />}
            colorScheme="blue"
            size="sm"
            _hover={{
              textDecoration: 'none'
            }}
          >
            作品のリンク
          </Button>
        )}

        {githubLink && (
          <Button
            as={Link}
            href={githubLink}
            isExternal
            leftIcon={<FaGithub />}
            colorScheme="gray"
            size="sm"
            _hover={{
              textDecoration: 'none'
            }}
          >
            GitHub
          </Button>
        )}

        {articleLink && (
          <Button
            as={Link}
            href={articleLink}
            isExternal
            leftIcon={<FaNewspaper />}
            colorScheme="green"
            size="sm"
            _hover={{
              textDecoration: 'none'
            }}
          >
            記事
          </Button>
        )}
      </Stack>
    </Box>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  youtubeUrl: PropTypes.string,
  description: PropTypes.string,
  deployLink: PropTypes.string,
  githubLink: PropTypes.string,
  articleLink: PropTypes.string
};

export default ProjectCard;
