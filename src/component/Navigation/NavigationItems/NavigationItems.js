import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import { connect } from 'react-redux';
import { startLogout } from '../../../store/actions/auth';
export const NavigationItems = (props) => (
  <ul>
    <NavigationItem link="/dashboard">Home</NavigationItem>
    <NavigationItem link="/create">Create</NavigationItem>
    <button onClick={props.startLogout} >Logout</button>
  </ul>
);

const mapDispatchToProps = (dispatch) =>{
  return { startLogout : () => dispatch(startLogout()) };
}

export default connect(undefined, mapDispatchToProps )(NavigationItems);