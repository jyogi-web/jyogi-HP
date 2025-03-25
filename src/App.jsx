import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Guidelines from "./pages/Guidelines";
import Admission from "./pages/Admission";
import Members from "./pages/Members";
import Board from "./pages/Board";
import Header from "./components/common/Header";
import Sidebar from "./components/common/Sidebar";
import Footer from "./components/common/Footer";
import MemberProject from "./pages/MemberProject";
import "./styles/index.css";
import { Stack, Box } from "@chakra-ui/react";

function App() {
  return (
    <Stack>
      <Header />
      <div className="">
        {/* <Sidebar/> */}
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/members" element={<Members />} />
            <Route path="/board" element={<Board />} />
            <Route path="/projects" element={<MemberProject />} />
          </Routes>
        </>
      </div>
      <Footer />
    </Stack>
  );
}

export default App;
