import React, {useState} from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [day, setDay] = useState('');
  const [id, setId] = useState('');
  const [militaryData, setMilitaryData] = useState(undefined);
  const [militaryData2, setMilitaryData2] = useState('');
  const [civilData, setCivilData] = useState(undefined);
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
                День:
        <input type="number" value={day} onChange={(e) => setDay(e.target.value)} />
      </label>
      <br />
      <label>
                Id стану:
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <br />
      <label>
                Військові:
        <input type="text" value={militaryData} onChange={(e) => setMilitaryData(e.target.value)} />
        <br />
        <input disabled={!militaryData} type="text" value={militaryData2} onChange={(e) => setMilitaryData2(e.target.value)} />
      </label>
      <br />
      <label>
                Цивільні:
        <input type="text" value={civilData} onChange={(e) => setCivilData(e.target.value)} />
        <br />
        <input disabled={!civilData} type="text" value={civilData2} onChange={(e) => setCivilData2(e.target.value)} />
      </label>
      <br />
      <label>
                Вороги:
        <input type="text" value={russian} onChange={(e) => setRussian(e.target.value)} />
      </label>
      <br />
      <label>
                Русоізоляція:
        <input type="checkbox" checked={rusIsolation} onChange={(e) => setRusIsolation(e.target.checked)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdminPage;
