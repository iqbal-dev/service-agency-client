import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import carousal1 from '../../../../images/carousel-1.png';
import carousal2 from '../../../../images/carousel-2.png';
import carousal3 from '../../../../images/carousel-3.png';
import carousal4 from '../../../../images/carousel-4.png';
import carousal5 from '../../../../images/carousel-5.png';
import './Carousal.css'
const work = [
  {
      img:carousal1
  },
  {
      img:carousal2
  },
  {
      img:carousal3
  },
  {
      img:carousal4
  },
  {
      img:carousal5
  },
]
const Carousal = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      autoplay: true,
      };
  
    return (
      <Slider {...settings} className="container">
        {
          work.map(work =>
            <div>
                <img className="img-fluid" style={{height:'250px'}} src={work.img} alt=""/>
            </div>
          )
        }
      </Slider>
    );
};

export default Carousal;