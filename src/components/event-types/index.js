import React from "react";

import "./style.scss";

const eventTypes = [
  {
    value: "running",
    label: "Running",
    backgroundColor: "rgb(8, 191, 169)",
    backgroundUrl: "https://virtual-race-submissions.s3-ap-southeast-1.amazonaws.com/images/category-run-png-nwn10102019-104426",
  },
  {
    value: "cycling",
    label: "Cycling",
    backgroundColor: "rgb(58, 183, 240)",
    backgroundUrl: "https://virtual-race-submissions.s3-ap-southeast-1.amazonaws.com/images/category-bike-png-udy10102019-110227",
    backgroundSize: "49%",
  },
  {
    value: "walking",
    label: "Walking",
    backgroundColor: "rgb(255, 112, 67)",
    backgroundUrl: "https://virtual-race-submissions.s3-ap-southeast-1.amazonaws.com/images/category-walk-png-67w10102019-110311"
  },
];

export default ({ history }) => {
  const onNavigate = (sportType) => {
    history.push("/events/races", { sportType });
  };
  return (
    <div className="event-types">
      {
        eventTypes.map((item, index) => (
          <div
            key={index}
            className="event-type"
            style={{
              backgroundColor: item.backgroundColor,
              backgroundImage: `url(${item.backgroundUrl})`,
              backgroundSize: item.backgroundSize,
            }}
            onClick={() => onNavigate(item.value)}
          >
            <span className="event-title">
              {item.label}
            </span>
          </div>
        ))
      }
    </div>
  );
};
