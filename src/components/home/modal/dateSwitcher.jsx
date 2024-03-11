import React from 'react';
import {useDispatch} from 'react-redux';
import moment from 'moment';

import s from './dateSwitcher.module.css';
import {useSelector} from 'react-redux';
import {decrementDay, incrementDay, selectDay} from '../../../reducers/modalSlice';

// eslint-disable-next-line react/prop-types
const DateSwitcher = () => {
  moment.updateLocale('uk', {
    months: [
      'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня',
      'August', 'September', 'October', 'November', 'December',
    ],
  });
  const dispatch = useDispatch();
  const day = useSelector(selectDay);


  const date = moment('23-02-2022', 'DD-MM-YYYY').add(day, 'd').format('DD MMMM YYYY');

  const handlePreviousDay = () => day>1 ? dispatch(decrementDay()) : false;
  const handleNextDay = () => dispatch(incrementDay());

  console.log(date);
  return (
    <div className={s.wrap}>
      <div className={s.container}>
        <div onClick={handlePreviousDay}>
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.15105 14.8923C8.34971 14.6937 8.34971 14.3716 8.15105 14.1729L1.72808 7.74994L8.15105 1.32696C8.34971 1.1283 8.34971 0.806211 8.15105 0.607551C7.95239 0.408891 7.6303 0.408891 7.43164 0.607551L0.648961 7.39023C0.450301 7.58889 0.450301 7.91098 0.648961 8.10964L7.43164 14.8923C7.6303 15.091 7.95239 15.091 8.15105 14.8923Z" fill="#D9D9D9"/>
          </svg>

        </div>
        <div>
          <p className={s.label}>День <span className={s.dayNum}>{day}</span></p>
          <p className={s.date}>{date}</p>
        </div>
        <div onClick={handleNextDay}>
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.599435 14.8923C0.400774 14.6937 0.400774 14.3716 0.599435 14.1729L7.02241 7.74994L0.599434 1.32696C0.400774 1.1283 0.400774 0.806211 0.599434 0.607551C0.798094 0.408891 1.12019 0.408891 1.31885 0.607551L8.10153 7.39023C8.30019 7.58889 8.30019 7.91098 8.10153 8.10964L1.31885 14.8923C1.12019 15.091 0.798095 15.091 0.599435 14.8923Z" fill="#D9D9D9"/>
          </svg>


        </div>
      </div>
    </div>
  );
};

export default DateSwitcher;
