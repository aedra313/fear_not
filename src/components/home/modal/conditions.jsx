import React from 'react';
import {useSelector} from 'react-redux';
import {selectDay} from '../../../reducers/modalSlice';
import mixer from '../labels/mixer';
import s from './conditions.module.css';

const Conditions = () => {
  const dayNumber = useSelector(selectDay);
  const conditionLabels = [];
  mixer(conditionLabels, dayNumber);

  return (
    <div className={s.container}>
      {conditionLabels}
    </div>
  );
};

export default Conditions;
