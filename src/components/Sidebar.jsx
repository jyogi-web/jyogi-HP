import React  from "react";
import { Link } from 'react-router-dom';
import Home from "./Home";
import '../styles/Sidebar.css';


const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="sidebar-item">
                <Link to="/home" className="link">トピック</Link>
            </div>
            <div className="sidebar-item">
                <Link to="/home" className="link">イベントログ</Link>
            </div>
            <div className="sidebar-item">
                <Link to="/home" className="link">成果物</Link>
            </div>

        </div>
    );
}
export default Sidebar;