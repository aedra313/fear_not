import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {selectDay} from '../../../reducers/modalSlice';
import s from './conditions.module.css';
import {selectDataLabelsArray} from '../../../reducers/cardiogramDataSlice';


// eslint-disable-next-line react/prop-types
const Conditions = ({isModal}) => {
  // eslint-disable-next-line new-cap


  const dayNumber = useSelector(selectDay);

  const dataArray = useSelector(selectDataLabelsArray);

  console.log(dataArray);


  const [conditionLabels, setConditionLabels] = useState([]);


  useEffect(() => {
    console.log(dataArray);
    setConditionLabels([dataArray[dayNumber - 1]]);
  }, [dataArray, dayNumber]);

  console.log(conditionLabels);
  return (
    <div className={`${s.container} ${isModal && s.modalLayout}`}>
      {conditionLabels}
    </div>
  );
};

export default Conditions;
