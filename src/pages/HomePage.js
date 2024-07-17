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
                    </div>
                    <div>
                        <img src="https://www.stust.edu.tw/tc/images/slider/banner-img/1130612.jpg" alt="2" />
                    </div>
                    <div>
                        <img src="https://www.stust.edu.tw/tc/images/slider/banner-img/1130708.jpg" alt="3" />
                    </div>
                </Slider>
            </div>

            <div className="school-active">
                <h1>近期校園活動</h1>
            </div>
        </div>
    );
}

export default HomePage;