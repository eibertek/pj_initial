import React from 'react';
import Slider from 'react-slick';
import {render} from 'react-dom';


export class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <Slider {...settings}>
        <div><img src="/static/images/portada.jpg" width="940" /></div>        
        <div><img src="/static/images/shows_2.jpg" /></div>
        <div><img src="/static/images/shows_3.jpg" /></div>
        <div><img src="/static/images/shows_4.jpg" /></div>
        <div><img src="/static/images/shows_5.jpg" /></div>
      </Slider>
    );
  }
}


window.renderSlide = function(id, data) {
    return render(<SimpleSlider info={data} />, document.getElementById(id));
}
