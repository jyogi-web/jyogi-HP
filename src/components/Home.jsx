import { Avatar, For, VStack, Text, Center,Image } from "@chakra-ui/react";
import TimeLine from "./TimeLine";
import About from "./About";

const Home = () => {
  return (
    <VStack grap="18">
        <Image src='imgs/header-back-logo.png'/>
        <Center>
            {/* <TimeLine /> */}
        </Center>
        <About/>
    </VStack>
  );ï
};

export default Home;
