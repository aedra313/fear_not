import React, {useState} from 'react';
import axios from 'axios';
import s from './adminPage.module.css';

const ModalAdmin = () =>{
  const [day, setDay] = useState('');
  const [videoURL1, setVideoURL1] = useState('');
  const [description1, setDescription1] = useState('');
  const [videoURL2, setVideoURL2] = useState('');
  const [description2, setDescription2] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    /*   const military = militaryData2 ? [militaryData, militaryData2] : militaryData || '';
    const civil = civilData2 ? [civilData, civilData2] : civilData || '';
*/

    const data = {
      day: Number(day),
      videoURL1,
      description1,
      videoURL2,
      description2,
    };
    console.log(data);
    try {
      const response = await axios.post('http://localhost:3000/api/modal', data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setVideoURL1('');
    setDescription1('');
    setVideoURL2('');
    setDescription2('');

    alert('Дані модальних вікон збережено');
  };

  return (
    <form className={s.container} onSubmit={handleSubmit}>
      <label>
        <span>День:</span>
        <input required type="number" value={day} onChange={(e) => setDay(e.target.value)} />
      </label>
      <br />
      <label>
        <span>videoURL1:</span>
        <input required type="text" value={videoURL1} onChange={(e) => setVideoURL1(e.target.value)} />
      </label>
      <br />
      <label>
        <span>Description1:</span>
        <input required type="text" value={description1} onChange={(e) => setDescription1(e.target.value)} />
      </label>
      <br />
      <label>
        <span>videoURL2:</span>
        <input required type="text" value={videoURL2} onChange={(e) => setVideoURL2(e.target.value)} />
      </label>
      <br />
      <label>
        <span>Description2:</span>
        <input required type="text" value={description2} onChange={(e) => setDescription2(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ModalAdmin;
