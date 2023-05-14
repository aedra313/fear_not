import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {selectDay} from '../../../reducers/modalSlice';
import s from './modal.module.css';
/*
import DATA from '../cardiogram/modalData';
*/
import axios from 'axios';

const VideoCard = () => {
  const dayNumber = useSelector(selectDay);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:3000/api/modal');
      setData(response.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 1 ? 0 : 1));
  };


  /*  const dayData = DATA.items[dayNumber];
  const video = dayData.videoURL;
  const description = dayData.description;*/
  const dayData = data[dayNumber-1];
  console.log(dayData);
  const video1 = dayData.videoURL1;
  const video2 = dayData.videoURL2;
  const description1 = dayData.description1;
  const description2 = dayData.description2;

  console.log(data);
  return (
    <div>
      <div style={{display: activeIndex === 0 ? 'block' : 'none'}}>
        <div className={s.video}>
          <iframe src={video1} width="324" height="300" allow="autoplay"></iframe>
        </div>
        <p>{description1}</p>
      </div>
      {video2 && <div style={{display: activeIndex === 1 ? 'block' : 'none'}}>
        <div className={s.video}>
          <iframe src={video2} width="324" height="300" allow="autoplay"></iframe>
        </div>
        <p>{description2}</p>
      </div>}
      {video2 && <button onClick={handlePrevClick}>Назад</button>}
      {video2 &&<button onClick={handleNextClick}>Вперед</button>}

    </div>
  );
};

export default VideoCard;
