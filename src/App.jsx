import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Guidelines from './components/Guidelines';
import Admission from './components/Admission';
import Members from './components/Members';
import Board from './components/Board';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MemberProject from './components/MemberProject';
import './styles/index.css';
import { Wrap,Box } from '@chakra-ui/react';

function App() {
  return (
    <Wrap>
      <Header />
      <hr />
      <div className=''>
        {/* <Sidebar/> */}
        <main className='route-page'>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/guidelines" element={<Guidelines />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/members" element={<Members />} />
              <Route path="/board" element={<Board />} />
              <Route path="/memberproject" element={<MemberProject />} />
          </Routes>
        </main>
      </div>
      <Footer />
      </Wrap>
  );
}

export default App;
