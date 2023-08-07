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
          <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.8699 12.5974C7.33815 12.1632 7.82062 11.7413 8.27262 11.2908C10.2364 9.33185 12.1984 7.3661 14.1588 5.39358C15.2923 4.25988 15.2293 3.03976 14.1557 1.82574C12.6667 0.15011 11.202 0.235518 9.69464 1.81252C6.80489 4.83435 3.83693 7.78501 0.830376 10.6899C-0.286926 11.7646 -0.266612 13.6324 0.830376 14.697C3.95679 17.7229 6.9989 20.8362 10.0735 23.915C11.3086 25.1514 12.5306 25.1483 13.7789 23.9069C13.9353 23.7513 14.0907 23.5968 14.2451 23.4402C15.2365 22.4305 15.2608 21.1016 14.2624 20.094C11.9601 17.7737 9.65029 15.4633 7.33307 13.1627C7.1929 13.0224 6.98468 12.9502 6.80794 12.8475L6.8699 12.5974Z" fill="#A4A4A4"/>
          </svg>
        </div>
        <div>
          <p className={s.label}>День <span className={s.dayNum}>{day}</span></p>
          <p className={s.date}>{date}</p>
        </div>
        <div onClick={handleNextDay}>
          <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.1301 12.5974C7.66185 12.1632 7.17938 11.7413 6.72738 11.2908C4.76364 9.33185 2.80159 7.3661 0.841232 5.39358C-0.292321 4.25988 -0.229346 3.03976 0.844279 1.82574C2.33334 0.15011 3.79802 0.235518 5.30536 1.81252C8.19511 4.83435 11.1631 7.78501 14.1696 10.6899C15.2869 11.7646 15.2666 13.6324 14.1696 14.697C11.0432 17.7229 8.0011 20.8362 4.92649 23.915C3.69137 25.1514 2.46945 25.1483 1.22111 23.9069C1.06469 23.7513 0.909286 23.5968 0.754895 23.4402C-0.236456 22.4305 -0.260834 21.1016 0.737628 20.094C3.03995 17.7737 5.34971 15.4633 7.66693 13.1627C7.8071 13.0224 8.01532 12.9502 8.19206 12.8475L8.1301 12.5974Z" fill="#A4A4A4"/>
          </svg>

        </div>
      </div>
    </div>
  );
};

export default DateSwitcher;
