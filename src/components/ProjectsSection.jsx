import { Container, Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { useProjects } from "@/hooks/useProjects";

const ProjectsSection = () => {
    const { projects, isLoading, error } = useProjects();

    const displayProjects = projects.slice(0, 3);

    return (
        <Container maxW="75%" py={12} mx="auto">
            <SectionHeader
                size="3xl"
                buttontext="他の作品を見る"
                buttonhref="/projects"
            >
                部員作品紹介
            </SectionHeader>

            <Box my={10} textAlign="center">
                {isLoading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                        <Spinner size="xl" color="blue.500" thickness="4px" />
                        <Text ml={4} fontSize="xl">データを読み込み中...</Text>
                    </Box>
                ) : error ? (
                    <Text color="red.500">データの読み込みに失敗しました: {error}</Text>
                ) : displayProjects.length === 0 ? (
                    <Text>表示するプロジェクトがありません</Text>
                ) : (
                    <SimpleGrid
                        columns={{ base: 1, sm: 2, lg: 3 }}
                        spacing={10}
                        justifyItems="center"
                    >
                        {displayProjects.map((project, index) => (
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
                )}
            </Box>
        </Container>
    );
};

export default ProjectsSection;
