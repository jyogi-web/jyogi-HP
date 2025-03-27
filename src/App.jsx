import { Route, Routes } from "react-router-dom";
import { Stack, Box } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import Home from "@/pages/Home";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import MemberProject from "@/pages/MemberProject";
import AchievementList from "@/pages/AchievementList";
import NewsList from "@/pages/NewsList";
import "@/styles/index.css";

function App() {
  const bgColor = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.900", "white");

  return (
    <Box
      bg={bgColor}
      color={textColor}
      minH="100vh"
      fontSize={{ base: "sm", md: "md" }}
    >
      <Stack spacing={0}>
        <Header />
        <Box
          as="main"
          width="100%"
          maxWidth="100vw"
          overflowX="hidden"
          pb={{ base: 4, md: 8 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<MemberProject />} />
            <Route path="/activities" element={<AchievementList />} />
            <Route path="/news" element={<NewsList />} />
          </Routes>
        </Box>
        <Footer />
      </Stack>
    </Box>
  );
}

export default App;
