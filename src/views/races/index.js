import React from "react";
import { Row, Col } from "reactstrap";
import lodash from "lodash";
import http from "../../helpers/http";

import "./style.scss";

const Loading = () => (
  <div className="loading-container">
    <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
  </div>
);

const EventFlatList = ({ events, selectedSportType }) => (
  <>
    <Row>
      <Col md="12">
        <label className="races-title">{events.length} {selectedSportType} event(s)</label>
      </Col>
    </Row>
    <Row>
      <Col md="12" className="races-flat-list">
        {
          events.map((item, index) => (
            <div key={index} className="horizonal-race-card">
              <div className="box-event-banner">
                <img src={item.banner_card} alt={item.race_name} />
                {
                  item.isFreeEngraving && <div className="event-red-tag">Free Medal engraving</div>
                }
              </div>
              <div className="race-info">
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
            </div>
          ))
        }
      </Col>
    </Row>
  </>
);

class Races extends React.Component {
  state = {
    selectedSportType: null,
    skipCount: 0,
    limit: 20,
    events: [],
    loading: false,
  };
  render() {
    const { events, loading, selectedSportType } = this.state;
    return (
      <div className="races-container">
        {
          loading ? <Loading /> : <EventFlatList selectedSportType={selectedSportType} events={events} />
        }
      </div>
    );
  }
  componentDidMount = async () => {
    const { history } = this.props;
    const selectedSportType = lodash.get(history, "location.state.sportType") || null;
    this.setState({ selectedSportType }, this.onFetchRaceEvents);
    history.replace();
  };

  onFetchRaceEvents = async () => {
    const { skipCount, limit, selectedSportType } = this.state;
    try {
      this.setState({ loading: true });
      const res = (
        await http.get("race-filters", {
          skipCount,
          limit,
          sportType: selectedSportType
        })
      ).data;
      this.setState({ events: res.data });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };
}

export default Races;
