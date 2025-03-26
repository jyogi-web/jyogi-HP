import { Container, Box, VStack, Image, SimpleGrid } from "@chakra-ui/react";
import About from "@/pages/About";
import News from "@/components/News";
import Achievement from "@/components/Achievement";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";

const Home = () => {
  // Homeに載せる３作品のみ
  const projects = [
    {
      title: "射的60s",
      author: "Rita",
      technologies: ["Unity", "C#"],
      youtubeUrl: "https://youtu.be/V33WS5e4fNQ",
      description:
        "60秒間で的を撃ち、高得点を目指すゲームです。プレイヤーは制限時間内にできるだけ多くの的を撃ち、ハイスコアを目指します。的の種類によって得点が異なり、動く的はより高得点になっています。",
      deployLink: "https://unityroom.com/games/shootinggallery60s",
      githubLink: null,
      articleLink: null,
    },
    {
      title: "FIT-typing",
      author: "Rita",
      technologies: ["Unity", "C#", "Illustrator"],
      youtubeUrl: "https://youtu.be/V33WS5e4fNQ",
      description:
        "タイピングゲームです。FITの授業や活動に関連した単語を素早くタイプして、スコアを競います。",
      deployLink: "https://unityroom.com/games/fit-typing",
      githubLink: null,
      articleLink: null,
    },
    {
      title: "リア充なんか蹴っ飛ばせ",
      author: "Rita",
      technologies: ["Unity", "C#"],
      youtubeUrl: "https://youtu.be/V33WS5e4fNQ",
      description:
        "リア充キャラクターを蹴っ飛ばして距離を競うゲームです。パワーとアングルを調整して、できるだけ遠くまで飛ばしましょう。",
      deployLink: "https://unityroom.com/games/riajuu_kickaway",
      githubLink: null,
      articleLink: null,
    }
  ];

  return (
    <VStack grap="18">
      <Image
        src="imgs/header-back-logo.png"
        width="100vw"
        maxWidth="100%"
        height="auto"
        objectFit="cover"
        m={0}
        p={0}
      />
      <About />
      <News />
      <Achievement />
      {/* 部員作品紹介 */}
      <Container maxW="75%" py={12} mx="auto">
        <SectionHeader
          size="3xl"
          buttontext="他の作品を見る"
          buttonhref="/projects"
        >
          部員作品紹介
        </SectionHeader>
        <Box my={10} textAlign="center">
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 3 }}
            spacing={10}
            justifyItems="center"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                author={project.author}
                technologies={project.technologies}
                youtubeUrl={project.youtubeUrl}
                description={project.description}
                deployLink={project.deployLink}
                githubLink={project.githubLink}
                articleLink={project.articleLink}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </VStack>
  );
};

export default Home;
