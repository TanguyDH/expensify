import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect} from 'react-router-dom';
import Layout from "./hoc/Layout/Layout";

export const PrivateRoute = ({
     isAuthenticated,
     component:Component,
     ...rest
     }) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Layout>
              <Component {...props} />
            </Layout>
        ) : (
            <Redirect to='/' />
        )
    )} />
);

const mapStateToProps = (state) =>{
    return {
        isAuthenticated: !!state.auth.uid
    }
} 


export default connect(mapStateToProps)(PrivateRoute);