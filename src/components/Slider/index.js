import React from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider.scss';

const TextSlider = () => {
    return(
        <div className="sliderContainer">
            <Slider>
                <div>
                    <h2 className="quote">".....Mr. Kramer has created an extraordinary collection of reproduction furniture..... He puts his own interpretation into everything he makes but the realism is there in the softly glowing finish and the hand planned surfaces....."</h2>
                    <h3 className="author">— The New York Times</h3>
                </div>
                <div>
                    <h2 className="quote">".....Mr. Kramer has created an extraordinary collection of reproduction furniture..... He puts his own interpretation into everything he makes but the realism is there in the softly glowing finish and the hand planned surfaces....."</h2>
                    <h3 className="author">— The New York Times</h3>
                </div>
            </Slider>
        </div>
    );
};

export default TextSlider;