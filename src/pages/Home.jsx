import { VStack, Image } from "@chakra-ui/react";
import About from "@/pages/About";
import News from "@/components/News";
import Achievement from "@/components/Achievement";
import ProjectsSection from "@/components/ProjectsSection";

const Home = () => {

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
      <ProjectsSection />
    </VStack>
  );
};

export default Home;
