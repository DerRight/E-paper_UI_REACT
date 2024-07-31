import React, { useState } from "react";
import { FaHome, FaSearch, FaChartBar, FaRegUser } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import LOGO from '../image/EpaperLogo_BLACK.png';
import './Sidebar.scss';
// import cx from "classnames";

function Sidebar({ setContent }) {
    const [selected, setSelected] = useState("home");
    // const [isOpen, setIsOpen] = useState(true);

    const handleItemClick = (item) => {
        setSelected(item);
        setContent(item);
        // setIsOpen(!isOpen);
    };

    return (
        <div className="Sidebar" /*{cx("Sidebar", { "Sidebar-closed": !isOpen })}*/>
            <div className="sidebar-header">
                <div className="logo">
                    <img src={LOGO} alt="logo" onClick={() => handleItemClick("home")} />
                </div>
            </div>

            <div className="sidebar-body">
                <ul className="sidebar-menu">
                    <li 
                        className={selected === "home" ?  "selected" : ""}
                        onClick={() => handleItemClick("home")}>
                            <FaHome />
                            <span>首頁</span>
                    </li>

                    <li 
                        className={selected === "search" ? "selected" : ""}
                        onClick={() => handleItemClick("search")}>
                            <FaSearch />
                            <span>搜尋</span>
                    </li>

                    <li 
                        className={selected === "favorite" ? "selected" : ""}
                        onClick={() => handleItemClick("favorite")}>
                            <MdFavorite />
                            <span>我的最愛</span>
                    </li>

                    <li 
                        className={selected === "setting" ? "selected" : ""}
                        onClick={() => handleItemClick("setting")}>
                            <IoMdSettings />
                            <span>設定</span>
                    </li>

                    <li 
                        className={selected === "chart" ? "selected" : ""}
                        onClick={() => handleItemClick("chart")}>
                            <FaChartBar />
                            <span>圖表</span>
                    </li>
                </ul>
            </div>

            <div className="sidebar-footer">
                <ul className="user">
                    <li 
                        className={selected === 'user' ? "selected" : ""}
                        onClick={() => handleItemClick("user")}>
                        <FaRegUser />
                        <span>使用者</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Sidebar;