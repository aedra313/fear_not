import React from 'react';
import s from './labels.module.css';


import DayElement from '../dayElements/dayElement';

import {useSelector} from 'react-redux';
import {selectDataLabelsArray} from '../../../../reducers/cardiogramDataSlice';

// eslint-disable-next-line react/prop-types
const Labels = ({width}) => {
  const dataArray = useSelector(selectDataLabelsArray);
  console.log(dataArray);
  const dayButtons = dataArray.map((day, index) => <DayElement key={`dataDay${Math.random()}`} labels={day} dayNumber={index+1} />);
  return (
    <div className={s.container}
      style={{
        'width': width - 54 + 'px',
      }}
    >
      {dayButtons}
    </div>
  );
};

export default Labels;
