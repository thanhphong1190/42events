import React, { Component } from 'react';
import { Route } from 'react-router-dom';

export default class ProtectedRoute extends Component {
  render() {
    const { path, exact, component, key } = this.props;
    return (
      <Route
        path={path}
        exact={exact}
        component={component}
        key={key}
      />
    );
  }
}
