import { Avatar, For, VStack, Text, Center, Image } from "@chakra-ui/react";
import TimeLine from "@/components/TimeLine";
import About from "@/pages/About";
import News from "@/components/News";
import Achievement from "@/components/Achievement";

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
      <Center>{/* <TimeLine /> */}</Center>
      <About />
      <News />
      <Achievement />
    </VStack>
  );
};

export default Home;
