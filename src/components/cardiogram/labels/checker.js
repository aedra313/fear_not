import DATA from '../data';
import Label from '../../misc/cardiogramMisc/label';
import React from 'react';

const checker = (props, item, prop, day) => {
  if (prop === props && typeof DATA.items[item][prop] === 'string' && DATA.items[item][prop]!== undefined) {
    day.push(<Label color={props} text={DATA.items[item][prop]}/>);
  } else if (prop === props && DATA.items[item][prop]!== undefined && typeof DATA.items[item][prop].isArray ) {
    day.push(<Label color={props} text={DATA.items[item][prop][0]}/>);
    day.push(<Label color={props} text={DATA.items[item][prop][1]}/>);
  }
  return day;
};

export default checker;
