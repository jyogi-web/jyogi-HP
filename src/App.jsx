import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Guidelines from "@/pages/Guidelines";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import MemberProject from "@/pages/MemberProject";
import AchievementList from "@/pages/AchievementList";
import "@/styles/index.css";
import { Stack, Box } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

function App() {
  const bgColor = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.900", "white");

  return (
    <Box bg={bgColor} color={textColor} minH="100vh">
      <Stack spacing={0}>
        <Header />
        <Box as="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/projects" element={<MemberProject />} />
            <Route path="/activities" element={<AchievementList/>}/>
          </Routes>
        </Box>
        <Footer />
      </Stack>
    </Box>
  );
}

export default App;
