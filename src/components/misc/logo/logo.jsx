import React from 'react';
import {ReactComponent as LogoImg} from './logo.svg';
import s from './logo.module.css';

const Logo = () => {
  return (
    <div className={s.logo}>
      <LogoImg className={s.img} />
      <p className={s.logo1line}>Не сцять</p>
      <p className={s.logo2line}>Не сцим. Стоїм. Їбашим</p>
    </div>
  );
};

export default Logo;
