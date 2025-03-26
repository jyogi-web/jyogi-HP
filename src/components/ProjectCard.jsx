"use client"

import PropTypes from 'prop-types';
import {
  Box,
  Image,
  Heading,
  Text,
  Stack,
  Badge,
  Link,
  Button,
  CloseButton,
  Dialog,
  Portal
} from '@chakra-ui/react';
import { FaGithub, FaYoutube, FaExternalLinkAlt, FaNewspaper, FaInfoCircle } from 'react-icons/fa';

const ProjectCard = ({
  title,
  author,
  date,
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
      return `https://img.youtube.com/vi/${videoId[1]}/maxresdefault.jpg`;
    }

    return null;
  };

  const thumbnailUrl = getYoutubeThumbnail(youtubeUrl);
  const bgColor = 'white';
  const borderColor = 'gray.200';

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
        {date}
      </Text>

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
        <Box mt={3}>
          <Dialog.Root size="md" placement="center" motionPreset="slide-in-bottom">
            <Dialog.Trigger asChild>
              <Button
                size="sm"
                colorScheme="teal"
                variant="solid"
                leftIcon={<FaInfoCircle />}
                width="100%"
              >
                詳細
              </Button>
            </Dialog.Trigger>
            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>{title}</Dialog.Title>
                    <Dialog.CloseTrigger asChild>
                      <CloseButton size="sm" />
                    </Dialog.CloseTrigger>
                  </Dialog.Header>
                  <Dialog.Body>
                    <Text mb={4} fontWeight="bold">作成者: {author}</Text>
                    <Stack direction={'row'} mb={4} flexWrap="wrap" gap={1}>
                      {technologies.map((tech, index) => (
                        <Badge key={index} colorScheme="blue" fontSize={'sm'}>
                          {tech}
                        </Badge>
                      ))}
                    </Stack>
                    <Text mb={4}>{description}</Text>
                    {thumbnailUrl && (
                      <Box maxW="100%" mb={4}>
                        <Image
                          src={thumbnailUrl}
                          alt={`${title} thumbnail`}
                          borderRadius="md"
                          w="full"
                        />
                      </Box>
                    )}
                    <Stack direction="row" spacing={4} mt={2}>
                      {youtubeUrl && (
                        <Button
                          as={Link}
                          href={youtubeUrl}
                          isExternal
                          colorScheme="red"
                          leftIcon={<FaYoutube />}
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
                          colorScheme="blue"
                          leftIcon={<FaExternalLinkAlt />}
                          _hover={{
                            textDecoration: 'none'
                          }}
                        >
                          作品のリンク
                        </Button>
                      )}
                    </Stack>
                  </Dialog.Body>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>
        </Box>
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
  date: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  youtubeUrl: PropTypes.string,
  description: PropTypes.string,
  deployLink: PropTypes.string,
  githubLink: PropTypes.string,
  articleLink: PropTypes.string
};

export default ProjectCard;
