import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import lodash from "lodash";
import AppHeader from "../components/app-header";
import Home from "./home";
import Races from "./races";
import AppMenu from "../components/app-menu";

class AppRouter extends React.Component {
  render = () => {
    const isOpenMenu = lodash.get(this.props, "master.isOpenMenu");
    return (
      <Container>
        <AppHeader {...this.props} />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/events" component={Home} />
          <Route exact={true} path="/events/races" component={Races} />
        </Switch>
        <AppMenu isOpen={isOpenMenu} />
      </Container>
    );
  };
}

const mapStateToProps = (state) => ({
  master: state.master,
});

export default connect(mapStateToProps, null)(AppRouter);
