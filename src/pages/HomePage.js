import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomePage.scss';

function HomePage() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="home-content">
            <div className="title-text">
                <h1>校園資訊</h1>
            </div>

            <div className="kiosk">
                <Slider {...settings}>
                    <div>
                        <img src="https://www.stust.edu.tw/tc/images/slider/banner-img/1130715.jpg" alt="1" />
                        <h6>南臺科大榮獲113年度獎勵「人文與社會科學領域論文獎」為全國私立科大唯一獲獎學校</h6>
                    </div>
                    <div>
                        <img src="https://www.stust.edu.tw/tc/images/slider/banner-img/1130612.jpg" alt="2" />
                        <h6>南臺科技大學113級畢業典禮 期望畢業生謹守校訓「信義誠實」準則，勇敢面對挑戰</h6>
                    </div>
                    <div>
                        <img src="https://www.stust.edu.tw/tc/images/slider/banner-img/1130708.jpg" alt="3" />
                        <h6>遠見雜誌最佳大學排行出爐南臺科大蟬聯人文社科大學私立科大第一，穩踞南霸天寶座</h6>
                    </div>
                </Slider>
            </div>

            <div className="school-active">
                <h1>近期校園活動</h1>

                <div className="school-active-recently">
                    <div className="school-active-date">
                        <h3>2024/07/22</h3>
                        <h3>【高教深耕】經費預算管考會議</h3>
                    </div>

                    <div className="school-active-date">
                        <h3>2024/08/03</h3>
                        <h3>金融證照電腦應試測驗 (台灣金融研訓院 台南考區)</h3>
                    </div>

                    <div className="school-active-date">
                        <h3>2024/08/10</h3>
                        <h3>113學年度新生說明會</h3>
                    </div>

                    <div className="school-active-date">
                        <h3>2024/08/12</h3>
                        <h3>【高教深耕】經費預算管考會議</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;