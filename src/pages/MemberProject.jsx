"use client"

import { Box, SimpleGrid, Container, Heading, Text, Spinner, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import { useProjects } from "../hooks/useProjects";

const MemberProject = () => {
  const { projects, isLoading, error } = useProjects();

  // ローディング状態
  if (isLoading) {
    return (
      <Container maxW="container.xl" py={10} textAlign="center">
        <Heading as="h2" size="xl" mb={8}>
          部員制作作品
        </Heading>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="300px">
          <Spinner size="xl" color="blue.500" thickness="4px" />
          <Text ml={4} fontSize="xl">データを読み込み中...</Text>
        </Box>
      </Container>
    );
  }

  // エラー状態
  if (error) {
    return (
      <Container maxW="container.xl" py={10}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          部員制作作品
        </Heading>
        <Alert status="error" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" rounded="md" py={6}>
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            データの読み込みに失敗しました
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            {error}
          </AlertDescription>
        </Alert>
      </Container>
    );
  }

  // データなし
  if (projects.length === 0) {
    return (
      <Container maxW="container.xl" py={10}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          部員制作作品
        </Heading>
        <Box textAlign="center" py={10}>
          <Text fontSize="lg">表示するプロジェクトがありません</Text>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h2" size="xl" mb={8} textAlign="center">
        部員制作作品
      </Heading>
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 24, md: 16 }}
        justifyItems="center"
        px={{ base: 4, md: 8 }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            authors={project.authors}
            date={project.date}
            technologies={project.technologies}
            youtubeUrl={project.youtubeUrl}
            description={project.description}
            deployLink={project.deployLink}
            githubLink={project.githubLink}
            articleLink={project.articleLink}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default MemberProject;
