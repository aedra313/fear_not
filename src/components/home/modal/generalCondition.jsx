import React from 'react';
import s from './modal.module.css';

const GeneralCondition = () => {
  return (
    <div>
      <div className={s.condition}>
        <p className={s.conditionLabel}>Загальний стан</p>
        <p className={s.conditionValue}>6 <span> / 7</span></p>
      </div>
    </div>
  );
};

export default GeneralCondition;
