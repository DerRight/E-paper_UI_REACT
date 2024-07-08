import React from "react";
import {Link} from 'react-router-dom';
import LOGO from '../image/EpaperLogo_BLACK.png';
import './Sidebar.scss';

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="sidebar-header">
                <img src={LOGO} alt="logo" />
            </div>

            <ul className="sidebar-menu">
                <li>
                    <Link to="/home">首頁</Link>
                </li>

                <li>
                    <Link to="/search">搜尋</Link>
                </li>

                <li>
                    <Link to="/favorite">我的最愛</Link>
                </li>

                <li>
                    <Link to="/Setting">設定</Link>
                </li>

                <li>
                    <Link to="/Chart">圖表</Link>
                </li>
            </ul>

            <div className="sidebar-footer"></div>
        </div>
    );
}
export default Sidebar;