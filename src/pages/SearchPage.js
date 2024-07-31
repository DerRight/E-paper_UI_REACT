import React from "react";
import "./SearchPage.scss";

function SearchPage() {
    return (
        <div className="searchpage">
            <div className="search-title">
                <h1>搜尋頁面</h1>
            </div>

            <div className="search-input">
                <input type="text" placeholder="請輸入您要找的班級、課程或是任課老師" />
                <button>搜尋</button>
            </div>
        </div>
    );
}

export default SearchPage;