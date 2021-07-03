import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import c1 from './assets/1.jpg'
import c2 from './assets/2.jpg'
import c3 from './assets/3.jpg'
import c4 from './assets/4.jpg'



export class CarouselContainer extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={c1} />
                    <p className="legend">Day and night, eat at anytime.</p>
                </div>
                <div>
                    <img src={c2} />
                    <p className="legend">Did you know you're helping hard working truck owners by being here?</p>
                </div>
                <div>
                    <img src={c3} />
                    <p className="legend">Looks real...it can be!</p>
                </div>
                <div>
                    <img src={c4} />
                    <p className="legend">Don't worry, we don't judge.</p>
                </div>
            </Carousel>
        );
    }
};

export default CarouselContainer