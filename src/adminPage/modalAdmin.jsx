import React, {useState} from 'react';
import axios from 'axios';
import s from './adminPage.module.css';

const ModalAdmin = () =>{
  const [day, setDay] = useState('');
  const [rawVideoURL1, setRawVideoURL1] = useState('');
  const [description1, setDescription1] = useState('');
  const [rawVideoURL2, setRawVideoURL2] = useState('');
  const [description2, setDescription2] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
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
      const response = await axios.post('http://localhost:3000/api/modal', data);
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

  console.log(rawVideoURL1.length>80 ? rawVideoURL1.slice(-19): undefined);

  /*
  setVideoURL1(videoURL1.replace(/view?usp=share_link/i, 'preview'));
*/

  return (
    <form className={s.container} onSubmit={handleSubmit}>
      <label>
        <span>День:</span>
        <input required type="number" value={day} onChange={(e) => setDay(e.target.value)} />
      </label>
      <br />
      <label>
        <span>videoURL1:</span>
        <input required type="text" value={rawVideoURL1} onChange={(e) => setRawVideoURL1(e.target.value)} />
      </label>
      <br />
      <label>
        <span>Description1:</span>
        <input required type="text" value={description1} onChange={(e) => setDescription1(e.target.value)} />
      </label>
      <br />
      <label>
        <span>videoURL2:</span>
        <input type="text" value={rawVideoURL2} onChange={(e) => setRawVideoURL2(e.target.value)} />
      </label>
      <br />
      <label>
        <span>Description2:</span>
        <input type="text" value={description2} onChange={(e) => setDescription2(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ModalAdmin;
