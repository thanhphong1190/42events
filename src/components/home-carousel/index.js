import React from "react";
import Slider from "react-slick";
import ReactPlaceholder from "react-placeholder";

import "./style.scss";

export default ({ events = [], loading = false }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <ReactPlaceholder
      type="text"
      showLoadingAnimation={true}
      ready={!loading}
      rows={8}
      color="#E0E0E0"
    >
      <Slider className="home-carousel" {...settings}>
        {events.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.banner_card} alt={item.race_name} />
          </div>
        ))}
      </Slider>
    </ReactPlaceholder>
  );
};
