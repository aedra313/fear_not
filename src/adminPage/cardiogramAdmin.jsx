import React, {useState} from 'react';
import axios from 'axios';
import s from './adminPage.module.css';

const CardiogramAdmin = () =>{
  const [day, setDay] = useState('');
  const [id, setId] = useState('');
  const [militaryData, setMilitaryData] = useState('');
  const [militaryData2, setMilitaryData2] = useState('');
  const [civilData, setCivilData] = useState('');
  const [civilData2, setCivilData2] = useState('');
  const [russian, setRussian] = useState('');
  const [rusIsolation, setRusIsolation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const military = militaryData2 ? [militaryData, militaryData2] : militaryData || '';
    const civil = civilData2 ? [civilData, civilData2] : civilData || '';


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
        <input required type="number" value={day} onChange={(e) => setDay(e.target.value)} />
      </label>
      <br />
      <label>
        <span>Id стану:</span>
        <input required type="number" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <br />
      <label>
        <span>Військові:</span>
        <div>
          <input type="text" value={militaryData} onChange={(e) => setMilitaryData(e.target.value)} />
          <input disabled={!militaryData} type="text" value={militaryData2} onChange={(e) => setMilitaryData2(e.target.value)} />
        </div>
      </label>
      <br />
      <label>
        <span>Цивільні:</span>
        <div>
          <input type="text" value={civilData} onChange={(e) => setCivilData(e.target.value)} />
          <input disabled={!civilData} type="text" value={civilData2} onChange={(e) => setCivilData2(e.target.value)} />
        </div>
      </label>
      <br />
      <label>
        <span>Вороги:</span>
        <input type="text" value={russian} onChange={(e) => setRussian(e.target.value)} />
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
