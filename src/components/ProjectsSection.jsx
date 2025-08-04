import React, { Suspense } from "react";
import { useAtom } from "jotai";
import { Container, Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import SectionHeader from "./common/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { ErrorBoundary } from "react-error-boundary";
import { projectsAtom } from "@/atoms/projects"; 

const ProjectsGrid = () => {
    const [projects] = useAtom(projectsAtom);
    const displayProjects = projects.slice(0, 3);

    const emptyColor = useColorModeValue("gray.500", "gray.400");

    if (displayProjects.length === 0) {
        return <Text color={emptyColor}>表示するプロジェクトがありません</Text>;
    }

    return (
        <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 3 }}
            spacing={10}
            justifyItems="center"
        >
            {displayProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </SimpleGrid>
    );
};

const LoadingFallback = () => (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <Spinner size="xl" color="blue.500" thickness="4px" />
        <Text ml={4} fontSize="xl" color={useColorModeValue("gray.700", "gray.300")}>
            データを読み込み中...
        </Text>
    </Box>
);

const ErrorFallback = ({ error }) => (
    <Text color={useColorModeValue("red.500", "red.300")}>
        データの読み込みに失敗しました: {error.message}
    </Text>
);

const ProjectsSection = () => {
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
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Suspense fallback={<LoadingFallback />}>
                        <ProjectsGrid />
                    </Suspense>
                </ErrorBoundary>
            </Box>
        </Container>
    );
};

export default ProjectsSection;
