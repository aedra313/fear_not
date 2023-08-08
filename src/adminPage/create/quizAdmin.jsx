import React, {useState} from 'react';
import axios from 'axios';
import s from '../adminPage.module.css';

const QuizAdmin = () =>{
  const [quizURL, setQuizURL] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();


    const data = {
      quizURL,
    };
    console.log(data);
    try {
      const response = await axios.post('https://fear-not-backend.onrender.com/api/quiz', data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setQuizURL('');

    alert('Посилання збережено');
  };

  return (
    <form className={s.container} onSubmit={handleSubmit}>
      <label>
        <span>Посилання на анкету</span>
        <input required type="string" value={quizURL} onChange={(e) => setQuizURL(e.target.value)} />
      </label>

      <button className={s.submit} type="submit">Опублікувати</button>
    </form>
  );
};

export default QuizAdmin;
