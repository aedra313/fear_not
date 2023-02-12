import React from 'react';
import TICK_VALUES from './tickValues';
import Label from '../misc/cardiogramMisc/label';
import COORDINATES from './coordinates';
import CONDITIONS from './conditions';
// import DATA from './data';
const Cardiogram = () => {
  console.log(TICK_VALUES);
  console.log(COORDINATES);
  console.log(CONDITIONS);
  // console.log(DATA.items.length());
  // console.log(DATA.items[2].day);
  return (
    <div>
      <Label color='#666' text="lorem" />
    </div>
  );
};

export default Cardiogram;
