import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import SearchPage from './SearchPage';
import FavoritePage from './FavoritePage';
import SettingPage from './SettingPage';
import ChartPage from './ChartPage';
import UserPage from './UserPage';
import './MainPage.scss';

function HomePage() {
    const [currentContent, setCurrentContent] = useState("home");

    const renderContent = () => {
        switch (currentContent) {
            case "home":
                return <h1>Home</h1>;
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
                return <h1>Home</h1>;
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
export default HomePage;