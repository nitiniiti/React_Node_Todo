import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (!auth.session.authenticated) {
                return <Redirect to="/" />
            } else {
                return <Component {...props} />
            }
        }}
    />
);


const mapStateToProps = state => ({
    auth: state
})

export const PrivateConnectedRoute = connect(mapStateToProps)(PrivateRoute);