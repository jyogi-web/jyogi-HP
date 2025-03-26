import { VStack, Image } from "@chakra-ui/react";
import About from "@/pages/About";
import News from "@/components/News";
import Achievement from "@/components/Achievement";
import ProjectsSection from "@/components/ProjectsSection";
import Seo from "@/components/Seo";

const Home = () => {
  return (
    <>
      <Seo
        title="情報技術研究部 | JYOGI - 福岡工業大学"
        description="福岡工業大学情報技術研究部（じょぎ）の公式ウェブサイトです。Web開発やゲーム開発を行う学生サークルです。"
        image="/imgs/jyogi.png"
      />
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
    </>
  );
};

export default Home;
