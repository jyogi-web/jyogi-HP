import { Avatar, For, VStack, Text, Center,Image } from "@chakra-ui/react";
import TimeLine from "@/components/TimeLine";
import About from "@/components/About";
import News from "@/components/News";
import Achievement from "@/components/Achievement";

const Home = () => {
  return (
    <VStack grap="18">
        <Image src='imgs/header-back-logo.png'/>
        <Center>
            {/* <TimeLine /> */}
        </Center>
        <About/>
        <News/>
        <Achievement/>
    </VStack>
  );ï
};

export default Home;
