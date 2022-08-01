
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class NextJsCarousel extends Component {
    render() {
        return (
            <div className="carousel-wrapper">
              <Carousel showThumbs = {false} autoPlay = {true} dynamicHeight = {false} infiniteLoop = {true} interval = {2000} >
                  <div>
                      <img src="https://icon-library.com/images/twitter-small-icon/twitter-small-icon-17.jpg" alt="image1" style = {{ height: '400px' , width: '400px' }}/>
                      
                  </div>
                  <div>
                      <img src="https://sportskreeda.com/wp-content/uploads/2020/12/106398849_580317029261853_4298231535878820781_n-925x1024.jpg" alt="image2" style = {{ height: '400px' , width: '400px' }} />
                     
                  </div>
                  <div>
                      <img src="https://moroesports.com/wp-content/uploads/2021/06/channels4_profile-compressed.jpg" alt="image3" style = {{ height: '400px' , width: '400px' }}/>
                     
  
                  </div>
                  <div>
                      <img src="https://adixesports.com/wp-content/uploads/2021/06/20210630_110158_compress93.jpg" alt="image4" style = {{ height: '400px' , width: '400px' }}/>
                  </div>
                  <div>
                      <img src="https://celebrow.com/wp-content/uploads/2021/07/Payal-Gaming.jpg" alt="image5" style = {{ height: '400px' , width: '400px' }}/>
                  </div>
              </Carousel>
            </div>
        );
    }
};