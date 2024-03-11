import React, {useEffect} from 'react';
import {fetchModalData, selectModalData, selectModalLoading} from '../../../reducers/ModalDataSlice';
import YouTube from 'react-youtube';
import {Carousel} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {selectDay} from '../../../reducers/modalSlice';
import s from './videoCard.module.css';

const VideoCard = () => {
  const dayNumber = useSelector(selectDay);
  const data = useSelector(selectModalData);
  const isLoading = useSelector(selectModalLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    !data && dispatch(fetchModalData());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const dayData = data[dayNumber-1];
  console.log(dayData);

  const frame1 ={
    video: dayData.videoURL1,
    description: dayData.description1,
  };

  const frame2 ={
    video: dayData.videoURL2,
    description: dayData.description2,
  };


  const frame =({video, description}) =>{
    const opts = {
      height: '700',
      width: '1040',
      playerVars: {
        autoplay: 1,
      },
    };

    const onReady = (event) => {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    };

    return (
      <div className={s.videoCard} >
        {console.log('Зрада')}
        {/* <YouTube
          videoId="4fFu9cMarB8"
          opts={opts}
          onReady={onReady}
        />*/}
        <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms" src={video} allow="autoplay" />
        <div><p>{description}</p></div>

      </div>
    );
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        {frame(frame1)}
      </div>
      {frame2.video && <div>
        {frame(frame2)}
      </div>}
    </Carousel>
  );
};
export default VideoCard;

