import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import HomePage from "./HomePage";
import SearchPage from './SearchPage';
import FavoritePage from './FavoritePage';
import SettingPage from './SettingPage';
import ChartPage from './ChartPage';
import UserPage from './UserPage';
import './MainPage.scss';

function MainPage() {
    const [currentContent, setCurrentContent] = useState("home");

    const renderContent = () => {
        switch (currentContent) {
            case "home":
                return <HomePage />;
            case "search":
                return <SearchPage />;
            case "favorite":
                return <FavoritePage />;
            case "setting":
                return <SettingPage />;
            case "chart":
                return <ChartPage />;
            case "user":
                return <UserPage />;
            default:
                return <HomePage />;
        }
    }
    return (
        <div className="home">
            <div className="sidebar">
                <Sidebar setContent={setCurrentContent} />
            </div>

            <div className="content">
                {renderContent()}
            </div>
        </div>
    );
}
export default MainPage;