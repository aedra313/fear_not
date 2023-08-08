import React, {useEffect, useState} from 'react';
import axios from 'axios';
import s from '../adminPage.module.css';
import {useSelector} from 'react-redux';
import {selectData} from '../../reducers/cardiogramDataSlice';

// eslint-disable-next-line react/prop-types
const CardiogramAdminUpdate = () =>{
  const [day, setDay] = useState(1);
  const [id, setId] = useState(1);
  const [militaryData, setMilitaryData] = useState('');
  const [militaryData2, setMilitaryData2] = useState('');
  const [civilData, setCivilData] = useState('');
  const [civilData2, setCivilData2] = useState('');
  const [russian, setRussian] = useState('');
  const [rusIsolation, setRusIsolation] = useState(false);

  const DBData = useSelector(selectData);


  useEffect(()=>{
    if (DBData && day) {
      const dayData = DBData.filter((obj) => obj.day === Number(day))[0]; console.log(`${dayData} + хуй`);
      console.log(dayData);
      if (dayData && day) {
        setId(dayData.id);
        if (dayData.military.isArray) {
          setMilitaryData(dayData.military[0]);
          setMilitaryData2(dayData.military[1]);
        } else {
          setMilitaryData(dayData.military);
        }

        if (dayData.civil.isArray) {
          setCivilData(dayData.civil[0]);
          setCivilData2(dayData.civil[1]);
        } else {
          setCivilData(dayData.civil);
        }
        setRussian(dayData.russian);
        setRusIsolation(dayData.rusIsolation);
      }

      console.log(dayData);
    }
  }, [day, DBData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const military = militaryData2 ? [militaryData, militaryData2] : militaryData || '';
    const civil = civilData2 ? [civilData, civilData2] : civilData || '';

    console.log(typeof military);

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
      const response = await axios.put(`https://fear-not-backend.onrender.com/api/cardiogram`, data, {
        params: {day: day}, // Условие обновления по полю "day"
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    alert('Дані кардіограми збережено');
  };

  return (
    <form className={s.container} onSubmit={handleSubmit}>
      <label>
        <span>День:</span>
        <div className={s.fieldErrorBlock}>
          <input required type="number" value={day} onChange={(e) => setDay(e.target.value)} />
          <p></p>
        </div>
      </label>
      <label>
        <span>Id стану:</span>
        <div className={s.fieldErrorBlock}>
          <input required type="number" value={id} placeholder={'1 - 7'} onChange={(e) => setId(e.target.value)} />
          <p></p>
        </div>
      </label>
      <label>
        <span>Військові:</span>
        <div className={s.fieldErrorBlock}>
          <input type="text" value={militaryData} onChange={(e) => setMilitaryData(e.target.value)} />
          <p></p>
          <input disabled={!militaryData} type="text" value={militaryData2} onChange={(e) => setMilitaryData2(e.target.value)} />
          <p></p>
        </div>
      </label>
      <label>
        <span>Цивільні:</span>
        <div className={s.fieldErrorBlock}>
          <input type="text" value={civilData} onChange={(e) => setCivilData(e.target.value)} />
          <p></p>
          <input disabled={!civilData} type="text" value={civilData2} onChange={(e) => setCivilData2(e.target.value)} />
          <p></p>
        </div>
      </label>
      <label>
        <span>Вороги:</span>
        <div className={s.fieldErrorBlock}>
          <input type="text" value={russian} onChange={(e) => setRussian(e.target.value)} />
          <p></p>
        </div>
      </label>
      <label className={s.rusoisolation}>
        <span>Русоізоляція:</span>
        <input type="checkbox" checked={rusIsolation} onChange={(e) => setRusIsolation(e.target.checked)} />
      </label>
      <button className={s.submit} type="submit">Опублікувати</button>
    </form>
  );
};

export default CardiogramAdminUpdate;
