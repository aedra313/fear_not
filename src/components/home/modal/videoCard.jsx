import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectDay} from '../../../reducers/modalSlice';
import s from './videoCard.module.css';

/*
import DATA from '../cardiogram/modalData';
*/
import {fetchModalData, selectModalData, selectModalLoading} from '../../../reducers/ModalDataSlice';

const VideoCard = () => {
  const dayNumber = useSelector(selectDay);
  const data = useSelector(selectModalData);
  const isLoading = useSelector(selectModalLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    !data && dispatch(fetchModalData());
  }, []);

  const [videoToggle, setVideoToggle] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const handleClick = () => {
    setVideoToggle( !videoToggle);
  };

  const dayData = data[dayNumber-1];
  console.log(dayData);
  const frame1 ={
    video: dayData.videoURL1,
    description: dayData.description1,
    cn: 'imgFrame ' + (videoToggle ? s.toggleOut : s.toggleIn),
  };
  const frame2 ={
    video: dayData.videoURL2,
    description: dayData.description2,
    cn: 'imgFrame ' + (videoToggle ? s.toggleIn : s.toggleOut),
  };


  const frame =({video, description, cn}) =>{
    return (
      <div className={s.videoCard} >
        <iframe className={cn} src={video} allow="autoplay"></iframe>
        <p className={cn}>{description}</p>
      </div>
    );
  };

  console.log(data);
  return (
    <div className={s.wrap}>
      {frame2.video && <button className={s.backButton} onClick={handleClick} />}
      {frame(frame1)}
      {frame2.video && frame(frame2)}
      {frame2.video && <button className={s.nextButton} onClick={handleClick} />}
    </div>
  );
};

export default VideoCard;
