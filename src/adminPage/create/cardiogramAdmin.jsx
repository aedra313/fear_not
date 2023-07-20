import React, {useEffect, useState} from 'react';
import axios from 'axios';
import s from './adminPage.module.css';
import {
  validateDay,
  validateId,
  validateDataLength,
} from './validation';
import {useSelector} from 'react-redux';
import {selectData} from '../reducers/cardiogramDataSlice';

// eslint-disable-next-line react/prop-types
const CardiogramAdmin = ({lastDay}) =>{
  const [day, setDay] = useState(undefined);
  const [id, setId] = useState(undefined);
  const [militaryData, setMilitaryData] = useState('');
  const [militaryData2, setMilitaryData2] = useState('');
  const [civilData, setCivilData] = useState('');
  const [civilData2, setCivilData2] = useState('');
  const [russian, setRussian] = useState('');
  const [rusIsolation, setRusIsolation] = useState(false);
  const [maySubmit, setMaySubmit] = useState(true);
  const [errorMessages, setErrorMessages] = useState(
      {
        day: '',
        id: '',
        militaryData: '',
        militaryData2: '',
        civilData: '',
        civilData2: '',
        russian: '',
      });
  const DBData = useSelector(selectData);


  useEffect(()=>{
    const dayErrorMessage = validateDay(day, lastDay);
    const idErrorMessage = validateId(id);
    const militaryDataErrorMessage = validateDataLength(
        militaryData,
        'militaryData',
    );
    const militaryData2ErrorMessage = validateDataLength(
        militaryData2,
        'militaryData2',
    );
    const civilDataErrorMessage = validateDataLength(civilData, 'civilData');
    const civilData2ErrorMessage = validateDataLength(
        civilData2,
        'civilData2',
    );
    const russianErrorMessage = validateDataLength(russian, 'russian');

    setErrorMessages({
      day: dayErrorMessage,
      id: idErrorMessage,
      militaryData: militaryDataErrorMessage,
      militaryData2: militaryData2ErrorMessage,
      civilData: civilDataErrorMessage,
      civilData2: civilData2ErrorMessage,
      russian: russianErrorMessage,
    });

    setMaySubmit(
        !dayErrorMessage &&
        !idErrorMessage &&
        !militaryDataErrorMessage &&
        !militaryData2ErrorMessage &&
        !civilDataErrorMessage &&
        !civilData2ErrorMessage &&
        !russianErrorMessage,
    );
  }, [day, id, militaryData, militaryData2, civilData, civilData2, russian]);


  console.log(lastDay);
  console.log(`maySubmit ${maySubmit}`);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!maySubmit) {
      return;
    }

    const military = militaryData2 ? [militaryData, militaryData2] : militaryData || '';
    const civil = civilData2 ? [civilData, civilData2] : civilData || '';

    console.log(DBData);
    const data = {
      day: Number(day),
      id: Number(id),
      military,
      civil,
      russian,
      rusIsolation,
    };
    console.log(data);
    try {
      const response = await axios.post('http://localhost:3000/api/cardiogram', data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setDay('');
    setId('');
    setMilitaryData('');
    setMilitaryData2('');
    setCivilData('');
    setCivilData2('');
    setRussian('');
    setRusIsolation(false);
    alert('Дані кардіограми збережено');
  };

  return (
    <form className={s.container} onSubmit={handleSubmit}>
      <label>
        <span>День:</span>
        <div className={s.fieldErrorBlock}>
          <input required type="number" value={day} placeholder={lastDay+1} onChange={(e) => setDay(e.target.value)} />
          <p>{errorMessages.day}</p>
        </div>
      </label>
      <br />
      <label>
        <span>Id стану:</span>
        <div className={s.fieldErrorBlock}>
          <input required type="number" value={id} placeholder={'1 - 7'} onChange={(e) => setId(e.target.value)} />
          <p>{errorMessages.id}</p>
        </div>
      </label>
      <br />
      <label>
        <span>Військові:</span>
        <div className={s.fieldErrorBlock}>
          <input type="text" value={militaryData} onChange={(e) => setMilitaryData(e.target.value)} />
          <p>{errorMessages.militaryData}</p>
          <input disabled={!militaryData} type="text" value={militaryData2} onChange={(e) => setMilitaryData2(e.target.value)} />
          <p>{errorMessages.militaryData2}</p>
        </div>
      </label>
      <br />
      <label>
        <span>Цивільні:</span>
        <div className={s.fieldErrorBlock}>
          <input type="text" value={civilData} onChange={(e) => setCivilData(e.target.value)} />
          <p>{errorMessages.civilData}</p>
          <input disabled={!civilData} type="text" value={civilData2} onChange={(e) => setCivilData2(e.target.value)} />
          <p>{errorMessages.civilData2}</p>
        </div>
      </label>
      <br />
      <label>
        <span>Вороги:</span>
        <div className={s.fieldErrorBlock}>
          <input type="text" value={russian} onChange={(e) => setRussian(e.target.value)} />
          <p>{errorMessages.russian}</p>
        </div>
      </label>
      <br />
      <label>
        <span>Русоізоляція:</span>
        <input type="checkbox" checked={rusIsolation} onChange={(e) => setRusIsolation(e.target.checked)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CardiogramAdmin;
