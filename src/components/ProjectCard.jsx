import PropTypes from 'prop-types';
import {
  Box, Image, Heading, Text, Stack, Badge, Link, Button, CloseButton, Dialog, Portal, HStack, Flex,
} from '@chakra-ui/react';
import { FaGithub, FaYoutube, FaExternalLinkAlt, FaNewspaper, FaInfoCircle, FaUser } from 'react-icons/fa';
import { useColorModeValue } from "@/components/ui/color-mode";
import { useState, useEffect } from 'react';

const ProjectCard = ({
  title,
  authors,
  date,
  technologies,
  youtubeUrl,
  description,
  deployLink,
  githubLink,
  articleLink
}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageError, setImageError] = useState(false);

  const getYoutubeThumbnail = (url) => {
    if (!url) return null;

    const videoId = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    if (videoId && videoId[1]) {
      return `https://img.youtube.com/vi/${videoId[1]}/hqdefault.jpg`;
    }

    return null;
  };

  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.500', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'white');
  const authorIconColor = useColorModeValue('#718096', '#A0AEC0');
  const noThumbnailBg = useColorModeValue('gray.100', 'gray.600');
  const noThumbnailText = useColorModeValue('gray.500', 'gray.300');

  const authorsText = Array.isArray(authors) ? authors.join(', ') : authors;

  const handleImageError = () => {
    console.log('Image failed to load, switching to jyogi.png');
    setImageError(true);
    setImageSrc('../../imgs/jyogi.png');
  };
  useEffect(() => {
    if (youtubeUrl) {
      const thumbnailUrl = getYoutubeThumbnail(youtubeUrl);
      if (thumbnailUrl) {
        setImageSrc(thumbnailUrl);
        setImageError(false);
      } else {
        setImageSrc('../../imgs/jyogi.png');
        setImageError(true);
      }
    } else {
      setImageSrc('../../imgs/jyogi.png');
      setImageError(true);
    }
  }, [youtubeUrl]);
  return (
    <Box
      maxW={{ base: "100%", sm: "320px" }}
      w="100%"
      bg={bgColor}
      boxShadow={'md'}
      rounded={'lg'}
      p={{ base: 4, md: 6 }}
      overflow={'hidden'}
      borderWidth="1px"
      borderColor={borderColor}
      transition="all 0.3s"
      _hover={{
        transform: { base: 'none', md: 'translateY(-5px)' },
        boxShadow: { base: 'md', md: 'lg' },
      }}
      mx="auto"
      my={{ base: 3, md: 4 }}
    >
      {imageSrc ? (
        <Box
          h={'200px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          <Image
            src={imageSrc}
            alt={`${title} thumbnail`}
            fit={imageError ? "contain" : "cover"}
            w="full"
            h="full"
            onError={handleImageError}
          />
        </Box>
      ) : (
        <Box
          h={'200px'}
          bg={noThumbnailBg}
          mt={-6}
          mx={-6}
          mb={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color={noThumbnailText}
        >
          <Image
            src="../../imgs/jyogi.png"
            alt="No thumbnail available"
            fit="contain"
            maxH="100%"
            maxW="100%"
            borderRadius="md"
            onError={() => console.error('Fallback image failed to load')}
          />
        </Box>
      )}
      <Heading
        fontSize={'xl'}
        fontWeight={500}
        fontFamily={'body'}
        noOfLines={1}
        color={headingColor}
      >
        {title}
      </Heading>

      <Text color={textColor} fontSize={'sm'} mt={2}>
        {date}
      </Text>

      <HStack mt={2} spacing={1} alignItems="center">
        <FaUser size="12px" color={authorIconColor} />
        <Text color={textColor} fontSize={'sm'} noOfLines={1}>
          {authorsText}
        </Text>
      </HStack>

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
                詳細を見る
              </Button>
            </Dialog.Trigger>
            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content bg={bgColor}>
                  <Dialog.Header>
                    <Dialog.Title color={headingColor}>{title}</Dialog.Title>
                    <Dialog.CloseTrigger asChild>
                      <CloseButton size="sm" />
                    </Dialog.CloseTrigger>
                  </Dialog.Header>
                  <Dialog.Body>
                    <Flex alignItems="center" mb={2}>
                      <FaUser color={authorIconColor} />
                      <Text ml={2} fontWeight="bold" color={headingColor}>作成者: {authorsText}</Text>
                    </Flex>

                    <Text fontSize="sm" color={textColor} mb={4}>{date}</Text>

                    <Stack direction={'row'} mb={4} flexWrap="wrap" gap={1}>
                      {technologies.map((tech, index) => (
                        <Badge key={index} colorScheme="blue" fontSize={'sm'}>
                          {tech}
                        </Badge>
                      ))}
                    </Stack>
                    <Text mb={4} color={headingColor}>{description}</Text>
                    {imageSrc && (
                      <Box maxW="100%" mb={4}>
                        <Image
                          src={imageSrc}
                          alt={`${title} thumbnail`}
                          borderRadius="md"
                          w="full"
                          fit={imageError ? "contain" : "cover"}
                          onError={handleImageError}
                        />
                      </Box>
                    )}
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4} mt={2}>
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
                          w={{ base: 'full', md: 'auto' }}
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
                          w={{ base: 'full', md: 'auto' }}
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
  authors: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  date: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
  youtubeUrl: PropTypes.string,
  description: PropTypes.string,
  deployLink: PropTypes.string,
  githubLink: PropTypes.string,
  articleLink: PropTypes.string
};

export default ProjectCard;
