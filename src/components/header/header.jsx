import React from 'react';
import s from './header.module.css';
import Logo from '../misc/logo/logo';
import Switch from '../misc/switch/switch';

const Header = () => {
  return (
    <header className={s. header}>
      <Logo />

      <div className={s.menuBlock}>
        <p className={s.lang}>Укр | Eng</p>
        <div className={s.menu}>
          <p className={s.active}>Не сцять</p>
          <Switch />
          <p>Русоізоляція</p>
        </div>
      </div>
    </header>
  );
};


export default Header;
