import React from "react";
import Sidebar from "../components/Sidebar";

function HomePage() {
    return (
        <div className="container">
            <div className="sidebar">
                <Sidebar />
            </div>

            <div className="content">
                <h1>Home</h1>
            </div>
        </div>
    );
}
export default HomePage;