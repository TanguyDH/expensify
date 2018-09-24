import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => (
  <ul>
    <NavigationItem link="/">Home</NavigationItem>
    <NavigationItem link="/create">Create</NavigationItem>
  </ul>
);

export default NavigationItems;