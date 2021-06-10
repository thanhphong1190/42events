import React from "react";
import { connect } from "react-redux";
import { toggleAppMenu } from "../../redux/master/actions";

import "./style.scss";

const AppHeader = ({ toggleAppMenu }) => {
  return (
    <div className="app-header">
      <div className="header-notification">
        <i className="fa fa-bell-o" />
      </div>
      <div className="header-title">Events</div>
      <div className="header-menu" onClick={toggleAppMenu}>
        <i className="fa fa-bars" />
      </div>
    </div>
  );
};

export default connect(null, { toggleAppMenu })(AppHeader);
