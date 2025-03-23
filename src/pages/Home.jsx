import { Avatar, For, VStack, Text, Center,Image } from "@chakra-ui/react";
import TimeLine from "./TimeLine";
import About from "./About";
import News from "./News";

const Home = () => {
  return (
    <VStack grap="18">
        <Image src='imgs/header-back-logo.png'/>
        <Center>
            {/* <TimeLine /> */}
        </Center>
        <About/>
        <News/>
    </VStack>
  );ï
};

export default Home;
