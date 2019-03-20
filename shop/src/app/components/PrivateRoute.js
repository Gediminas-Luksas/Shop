import React from 'react';
import PropsTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import auth from '../../auth';

function PrivateRoute({ isLogged, path, ...props }) {
  if (!isLogged) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: {
            intendedLocation: path,
          },
        }}
      />
    );
  }
  return <Route path={path} {...props} />;
}

PrivateRoute.propTypes = {
  isLogged: PropsTypes.bool.isRequired,
  path: PropsTypes.string.isRequired,
};

const endhance = connect(state => ({
  isLogged: auth.selector.isLogged(state),
}));

export default endhance(PrivateRoute);
