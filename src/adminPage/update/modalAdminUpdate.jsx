import React, {useEffect, useState} from 'react';
import axios from 'axios';
import s from '../adminPage.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {fetchModalData, selectModalData} from '../../reducers/ModalDataSlice';
import {validateDay} from './validation';

/* import {
  validateDay,
} from './validation';*/

// eslint-disable-next-line react/prop-types
const ModalAdminUpdate = () =>{
  const [day, setDay] = useState('');
  const [rawVideoURL1, setRawVideoURL1] = useState('');
  const [description1, setDescription1] = useState('');
  const [rawVideoURL2, setRawVideoURL2] = useState('');
  const [description2, setDescription2] = useState('');
  const [maySubmit, setMaySubmit] = useState(true);
  const [errorMessages, setErrorMessages] = useState(
      {
        day: '',
        rawVideoURL1: '',
        description1: '',
        rawVideoURL2: '',
        description2: '',
      });

  const dispatch = useDispatch();
  const modalData = useSelector(selectModalData);

  useEffect(()=>{
    modalData.length === 0 ? dispatch(fetchModalData()) : null;
  });
  useEffect(()=>{
    const dayErrorMessage = validateDay(day, lastDay);

    setErrorMessages({
      day: dayErrorMessage,
    });

    setMaySubmit(
        !dayErrorMessage,
    );
  }, [day, rawVideoURL1, description1, rawVideoURL2, description2]);

  console.log(modalData);
  const lastDay = modalData.length;
  console.log(lastDay);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!maySubmit) {
      return;
    }

    const videoURL1 = rawVideoURL1.replace('view?usp=share_link', 'preview');
    const videoURL2 = rawVideoURL2.replace('view?usp=share_link', 'preview');

    // Выполняем дальнейшие действия с измененным URL
    console.log(videoURL1);

    /*   const military = militaryData2 ? [militaryData, militaryData2] : militaryData || '';
    const civil = civilData2 ? [civilData, civilData2] : civilData || '';
*/
    /* if(videoURL1.length>80 & videoURL1.slice(-4)==='link')){

}*/

    const data = {
      day: Number(day),
      videoURL1: videoURL1,
      description1,
      videoURL2: videoURL2,
      description2,
    };
    console.log(data);
    try {
      const response = await axios.post('https://fear-not-backend.onrender.com/api/modal', data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setRawVideoURL1('');
    setDescription1('');
    setRawVideoURL2('');
    setDescription2('');

    alert('Дані модальних вікон збережено');
  };
  console.log(errorMessages);
  console.log(rawVideoURL1.length>80 ? rawVideoURL1.slice(-19): undefined);

  /*
  setVideoURL1(videoURL1.replace(/view?usp=share_link/i, 'preview'));
*/

  return (
    <form className={s.container} onSubmit={handleSubmit}>
      <label>
        <span>День:</span>
        <div className={s.fieldErrorBlock}>
          <input required type="number" placeholder={lastDay +1 } value={day} onChange={(e) => setDay(e.target.value)} />
          {/* <p>{errorMessages.day}</p>*/}
        </div>
      </label>
      <br />
      <label>
        <span>videoURL1:</span>
        <div className={s.fieldErrorBlock}>
          <input required type="text" value={rawVideoURL1} onChange={(e) => setRawVideoURL1(e.target.value)} />
          {/* <p>{errorMessages.rawVideoURL1}</p>*/}
        </div>
      </label>
      <br />
      <label>
        <span>Description1:</span>
        <div className={s.fieldErrorBlock}>
          <input required type="text" value={description1} onChange={(e) => setDescription1(e.target.value)} />
          {/* <p>{errorMessages.description1}</p>*/}
        </div>
      </label>
      <br />
      <label>
        <span>videoURL2:</span>
        <div className={s.fieldErrorBlock}>
          <input disabled={!rawVideoURL1} type="text" value={rawVideoURL2} onChange={(e) => setRawVideoURL2(e.target.value)} />
          {/* <p>{errorMessages.rawVideoURL2}</p>*/}
        </div>
      </label>
      <br />
      <label>
        <span>Description2:</span>
        <div className={s.fieldErrorBlock}>
          <input disabled={!rawVideoURL1} type="text" value={description2} onChange={(e) => setDescription2(e.target.value)} />
          {/* <p>{errorMessages.description2}</p>*/}
        </div>
      </label>
      <br />
        <button className={s.submit} type="submit">Опублікувати</button>
    </form>
  );
};

export default ModalAdminUpdate;
