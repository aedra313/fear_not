import React from 'react';
import s from './labels.module.css';
import Label from '../../misc/cardiogramMisc/label';
import DATA from './../data';

const Labels = () => {
  console.log(DATA.items);
  const labelsArr =[];
  let arr =[];
  const checker = (props, item, prop) => {
    if (prop === props && typeof DATA.items[item][prop] === 'string' && DATA.items[item][prop]!== undefined) {
      arr.push(<Label color={props} text={DATA.items[item][prop]}/>);
    } else if (prop === props && DATA.items[item][prop]!== undefined && typeof DATA.items[item][prop].isArray ) {
      arr.push(<Label color={props} text={DATA.items[item][prop][0]}/>);
      arr.push(<Label color={props} text={DATA.items[item][prop][1]}/>);
    }
    return arr;
  };

  // eslint-disable-next-line guard-for-in
  for (const item in DATA.items) {
    labelsArr.push(<div>{arr}</div>);
    arr = [];

    console.log('loop 1');
    console.log('labelsArr');
    // eslint-disable-next-line guard-for-in
    for (const prop in DATA.items[item]) {
      console.log(prop);
      console.log(DATA.items[item][prop]);
      checker('military', item, prop);
      checker('civil', item, prop);
      checker('faggot', item, prop);


      console.log(arr);
    }
  }

  return (
    <div className={s.container}>
      {
        labelsArr

      }
    </div>
  );
};

export default Labels;
