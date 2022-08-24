
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class NextJsCarousel extends Component {
    render() {
        return (
            <div className="carousel-wrapper">
              <Carousel showThumbs = {false} autoPlay = {true} dynamicHeight = {false} infiniteLoop = {true} interval = {2000} >
                  <div>
                      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._sNqv1NcKw7jGrlSEXcZFAHaHF%26pid%3DApi&f=1" alt="image1" style = {{ height: '400px' , width: '400px' }}/>
                      
                  </div>
                  <div>
                      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vog5PPffkOEJk14ZrAobJAHaHa%26pid%3DApi&f=1" alt="image2" style = {{ height: '400px' , width: '400px' }} />
                     
                  </div>
                  <div>
                      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qyOYaWxr5oNMu3G0BpIsLAHaHY%26pid%3DApi&f=1" alt="image3" style = {{ height: '400px' , width: '400px' }}/>
                     
  
                  </div>
                  <div>
                      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.83XpN-IHHM4b_xraWEKJsAHaIq%26pid%3DApi&f=1" alt="image4" style = {{ height: '400px' , width: '400px' }}/>
                  </div>
                  <div>
                      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.f47bfj7sNyJHkhQOEr88iQHaHa%26pid%3DApi&f=1" alt="image5" style = {{ height: '400px' , width: '400px' }}/>
                  </div>
              </Carousel>
            </div>
        );
    }
};