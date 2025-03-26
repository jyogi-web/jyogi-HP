"use client"

import { Box, SimpleGrid, Container, Heading, Text, Spinner, Alert } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import ProjectCard from "../components/ProjectCard";
import { useProjects } from "../hooks/useProjects";
import Seo from "@/components/Seo";

const MemberProject = () => {
  const { projects, isLoading, error } = useProjects();

  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const bgColor = useColorModeValue("white", "gray.800");
  const boxShadow = useColorModeValue("sm", "md");

  return (
    <>
      <Seo
        title="部員作品 | 情報技術研究部 JYOGI"
        description="福岡工業大学情報技術研究部（じょぎ）の部員による制作作品を紹介しています。ウェブアプリ、ゲーム開発など様々な作品があります。"
        image="/imgs/jyogi.png"
      />

      {/* ローディング状態 */}
      {isLoading ? (
        <Container maxW="container.xl" py={10} textAlign="center">
          <Heading as="h2" size="xl" mb={8} color={headingColor}>
            部員制作作品
          </Heading>
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="300px">
            <Spinner size="xl" color="blue.500" thickness="4px" />
            <Text ml={4} fontSize="xl" color={textColor}>データを読み込み中...</Text>
          </Box>
        </Container>
      ) : error ? (
        <Container maxW="container.xl" py={10}>
          <Heading as="h2" size="xl" mb={8} textAlign="center" color={headingColor}>
            部員制作作品
          </Heading>
          <Alert status="error" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" rounded="md" py={6} bg={useColorModeValue("red.50", "red.900")} color={useColorModeValue("red.700", "red.200")}>
            <Alert.Icon boxSize="40px" mr={0} />
            <Alert.Title mt={4} mb={1} fontSize="lg">
              データの読み込みに失敗しました
            </Alert.Title>
            <Alert.Description maxWidth="sm">
              {error}
            </Alert.Description>
          </Alert>
        </Container>
      ) : projects.length === 0 ? (
        <Container maxW="container.xl" py={10}>
          <Heading as="h2" size="xl" mb={8} textAlign="center" color={headingColor}>
            部員制作作品
          </Heading>
          <Box textAlign="center" py={10} bg={bgColor} borderRadius="md" shadow={boxShadow}>
            <Text fontSize="lg" color={textColor}>表示するプロジェクトがありません</Text>
          </Box>
        </Container>
      ) : (
        <Container maxW="container.xl" py={10}>
          <Heading as="h2" size="xl" mb={8} textAlign="center" color={headingColor}>
            部員制作作品
          </Heading>
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 3 }}
            spacing={{ base: 8, sm: 12, md: 16 }}
            justifyItems="center"
            px={{ base: 2, md: 8 }}
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
      )}
    </>
  );
};

export default MemberProject;
