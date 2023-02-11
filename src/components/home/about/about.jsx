import React from 'react';
import taras from './taras.svg';

import s from './about.module.css';

const About = () => {
  return (
    <div>
      <div className={s.aboutWrap}>
        <h2 className={s.aboutTitle}>Про проєкт</h2>
        <p className={s.aboutContent}>Хроніки Війни - це
            проєкт українського журналіста Тараса Білки,
            який спільно з командою психологів аналізує стани
            українських військових,
            цивільних та ІПсО російських окупантів з
            першого дня повномасштабного вторгнення.</p>
      </div>

      <div className={s.cardWrap}>
        <div className={s.card}>
          <img src={taras} alt="Тарас Білка"/>
          <div>
            <h3>
                Тарас Білка
            </h3>
            <p>
                Хроніки війни - це проєкт украінського журналіста Тараса Білки,
                який спільно з командою психологів aналізує стани
                украінських військових....
            </p>
          </div>
        </div>
      </div>

      <div className={`${s.cardWrap} ${s.right}`}>
        <div className={`${s.card} ${s.reverse}`}>
          <img src={taras} alt="Тарас Білка"/>
          <div>
            <h3>
            Психолог проєкту:
            </h3>
            <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                A adipisci explicabo fugiat laborum libero magni modi
                necessitatibus neque nihil nulla obcaecati odit
                placeat qui quidem rem sed, sint.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
