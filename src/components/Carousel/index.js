import React from "react";
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../images/plumCabinet.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ReactCarousel = () => {
    return(
        <Carousel showStatus={false} >
            <div>
                <img src={image1}/>
            </div>
            <div>
                <img src={image1}/>
            </div>
        </Carousel>
    );
};

export default ReactCarousel;