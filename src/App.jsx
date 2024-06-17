import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Guidelines from './components/Guidelines';
import Admission from './components/Admission';
import Members from './components/Members';
import Board from './components/Board';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>Hello, JyogiHP!</h1>
        <nav>
          <ul>
            <li><Link to="/home">ホーム</Link></li>
            <li><Link to="/about">はじめに</Link></li>
            <li><Link to="/guidelines">利用上の注意</Link></li>
            <li><Link to="/admission">入部希望者へ</Link></li>
            <li><Link to="/members">所属部員</Link></li>
            <li><Link to="/board">掲示板</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/members" element={<Members />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </main>
      <footer>
        <p>福岡工業大学 情報技術研究部</p>
      </footer>
    </>
  );
}

export default App;
