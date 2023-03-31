import React from 'react';
import s from './dayElement.module.css';
import useMobile from '../../../hooks/useMobile';
/* import totalWidth from '../TOTALWIDTH';
import total from '../total';*/

// eslint-disable-next-line react/prop-types
const DayElement = ({labels, setModalState, dayNumber}) => {
  // const width = {
  // width: 50 /* (totalWidth-100) / (total)*/,
  // };
  const isMobile = useMobile();

  const modalOpener = () => {
    setModalState(dayNumber);
  };

  return (
    <div className={s.wrap} onClick={modalOpener}>
      <div className={s.borders} >
        <div className={s.border} >
          <div className={s.borderEdge} />
          <div className={s.borderMain} />
          {!isMobile && <div className={s.borderMain} />}
          {!isMobile && <div className={s.borderMain} />}
          <div className={s.borderEdge} />
        </div>
        <div className={s.border} />
      </div>
      <div className={s.labels}>{labels}</div>
    </div>
  );
};

export default DayElement;
