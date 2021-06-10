import React from "react";
import Slider from "react-slick";
import lodash from "lodash";
import ReactPlaceholder from "react-placeholder";

import "./style.scss";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  if (!onClick) {
    return null;
  }
  return (
    <div
      className="custom-prev-next-btns custom-next-btn"
      onClick={onClick}
    >
      <i className="btn-icon fa fa-chevron-right" aria-hidden="true"></i>
    </div>
  )
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  if (!onClick) {
    return null;
  }
  return (
    <div
      className="custom-prev-next-btns custom-prev-btn"
      onClick={onClick}
    >
      <i className="btn-icon fa fa-chevron-left" aria-hidden="true"></i>
    </div>
  );
}

export default ({ title = "", events = [], loading = false }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "15px",
          nextArrow: null,
          prevArrow: null,
        }
      }
    ]
  };
  return (
    <div className="filtered-events">
      <hr />
      <div className="header">
        <label className="title">{title}</label>
      </div>
      <ReactPlaceholder
        type="text"
        showLoadingAnimation={true}
        ready={!loading}
        rows={6}
        color="#E0E0E0"
      >
        <Slider className="custom-slider" {...settings}>
          {
            events.map((item, index) => (
              <div key={index} className="slider-event">
                <div className="box-event-banner">
                  <img src={item.banner_card} alt={item.race_name} />
                  {
                    !!item.isFreeEngraving && <div className="event-red-tag">Free Medal engraving</div>
                  }
                </div>
                <div className="race-title">{item.race_name}</div>
                <div className="race-date">{item.racePeriod}</div>
                <div className="event-tags">
                  { !!item.sportType &&  <div className="tag">{item.sportType}</div> }
                  { !!item.raceRunners &&  <div className="tag">{`${item.raceRunners} joined`}</div> }
                  { !!item.racePrice &&  <div className="tag">{item.racePrice}</div> }
                  {
                    !lodash.isEmpty(item.categories)
                      && item.categories.map((category, cateIndex) => <div key={cateIndex} className="tag">{category}</div>)
                  }
                  { item.eventType === "single" &&  <div className="tag">Single submission</div> }
                  { item.eventType === "multiple" &&  <div className="tag">Multiple submission</div> }
                </div>
              </div>
            ))
          }
        </Slider>
      </ReactPlaceholder>
    </div>
  );
};
