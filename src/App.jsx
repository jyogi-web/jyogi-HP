import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Guidelines from "@/pages/Guidelines";
import Admission from "@/pages/Admission";
import Members from "@/pages/Members";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import MemberProject from "@/pages/MemberProject";
import "@/styles/index.css";
import { Stack } from "@chakra-ui/react";

function App() {
  return (
    <Stack>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/members" element={<Members />} />
          <Route path="/projects" element={<MemberProject />} />
        </Routes>
      </div>
      <Footer />
    </Stack>
  );
}

export default App;
