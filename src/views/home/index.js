import React from "react";
import { Row, Col } from "reactstrap";
import lodash from "lodash";
import HomeCarousel from "../../components/home-carousel";
import EventTypes from "../../components/event-types";
import FilteredEvents from "../../components/filtered-events";
import http from "../../helpers/http";

import "./style.scss";

class Home extends React.Component {
  state = {
    featuredEvents: [],
    freeEvents: [],
    startingSoonEvents: [],
    popularEvents: [],
    newReleaseEvents: [],
    pastEvents: [],
    loading: false,
  };

  render() {
    const {
      loading,
      featuredEvents,
      freeEvents,
      startingSoonEvents,
      popularEvents,
      newReleaseEvents,
      pastEvents,
    } = this.state;
    return (
      <div className="home-container">
        <Row>
          <Col md="12">
            <HomeCarousel events={featuredEvents} loading={loading} />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md="12">
            <h3 className="font-weight-bold">Events</h3>
          </Col>
          <Col md="12">
            <EventTypes history={this.props.history} />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FilteredEvents
              title={"Starting soon"}
              events={startingSoonEvents}
              loading={loading}
            />
          </Col>
          <Col md="12">
            <FilteredEvents
              title={"Popular"}
              events={popularEvents}
              loading={loading}
            />
          </Col>
          <Col md="12">
            <FilteredEvents
              title={"New Releases"}
              events={newReleaseEvents}
              loading={loading}
            />
          </Col>
          <Col md="12">
            <FilteredEvents
              title={"Free"}
              events={freeEvents}
              loading={loading}
            />
          </Col>
          <Col md="12">
            <FilteredEvents
              title={"Past Events"}
              events={pastEvents}
              loading={loading}
            />
          </Col>
        </Row>
      </div>
    );
  }
  componentDidMount = async () => {
    this.onFetchRaceEvents();
  };

  onFetchRaceEvents = async () => {
    try {
      this.setState({ loading: true });
      const res = (await http.get("race-events")).data;
      this.setState({
        featuredEvents: lodash.get(res, "data.featured"),
        freeEvents: lodash.get(res, "data.free"),
        startingSoonEvents: lodash.get(res, "data.startingSoon"),
        popularEvents: lodash.get(res, "data.popular"),
        newReleaseEvents: lodash.get(res, "data.newRelease"),
        pastEvents: lodash.get(res, "data.past"),
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };
}

export default Home;
