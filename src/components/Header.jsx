import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className='header'>
            <h1>情報技術研究部</h1>
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
        </div>
    );
}
export default Header;