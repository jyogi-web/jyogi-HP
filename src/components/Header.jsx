import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return(
        <div className='header'>
            <div className='header-main'>
                <Link to="/"><img src='img\jyogi-icon.gif' className='header-icon'/></Link>
                <img src='img\jyogi-top-logo.png' className='header-logo'/>

            </div>
            <nav>
                <div className='header-item'><Link to="/home" className="link">ホーム</Link></div>
                <div className='header-item'><Link to="/about" className="link">はじめに</Link></div>
                <div className='header-item'><Link to="/guidelines" className="link">利用上の注意</Link></div>
                <div className='header-item'><Link to="/admission" className="link">入部希望者へ</Link></div>
                <div className='header-item'><Link to="/members" className="link">所属部員</Link></div>
                <div className='header-item'><Link to="/board" className="link">掲示板</Link></div>
            </nav>           
        </div>
    );
}
export default Header;
