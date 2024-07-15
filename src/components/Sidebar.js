import React from "react";
import { FaHome, FaSearch, FaChartBar, FaRegUser } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import LOGO from '../image/EpaperLogo_BLACK.png';
import './Sidebar.scss';

function Sidebar({ setContent }) {
    return (
        <div className="Sidebar">
            <div className="sidebar-header">
                <div className="logo">
                    <img src={LOGO} alt="logo" />
                </div>
            </div>

            <div className="sidebar-body">
                <ul className="sidebar-menu">
                    <li onClick={() => setContent("home")}>
                        <FaHome />
                        <span>首頁</span>
                    </li>

                    <li onClick={() => setContent("search")}>
                        <FaSearch />
                        <span>搜尋</span>
                    </li>

                    <li onClick={() => setContent("favorite")}>
                        <MdFavorite />
                        <span>我的最愛</span>
                    </li>

                    <li onClick={() => setContent("setting")}>
                        <IoMdSettings />
                        <span>設定</span>
                    </li>

                    <li onClick={() => setContent("chart")}>
                        <FaChartBar />
                        <span>圖表</span>
                    </li>
                </ul>
            </div>

            <div className="sidebar-footer">
                <ul className="user">
                    <li onClick={() => setContent("user")}>
                        <FaRegUser />
                        <user>使用者</user>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Sidebar;