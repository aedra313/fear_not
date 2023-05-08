import React from 'react';
import {useSelector} from 'react-redux';
import {selectDay} from '../../../reducers/modalSlice';
import s from './modal.module.css';
import DATA from '../cardiogram/modalData';

const VideoCard = () => {
  const dayNumber = useSelector(selectDay);
  const dayData = DATA.items[dayNumber];
  const video = dayData.videoURL;
  const description = dayData.description;
  return (
    <div>
      <div className={s.video}>
        <iframe src={video} width="324" height="300" allow="autoplay"></iframe>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default VideoCard;
