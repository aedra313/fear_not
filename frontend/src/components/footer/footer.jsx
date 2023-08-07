import React from 'react';
import s from './footer.module.css';
import useWidth from '../../hooks/useWidth';
import Fb from './social/fb';
import Ins from './social/ins';
import Tg from './social/tg';

const Footer = () => {
  const width = useWidth();
  console.log(width);
  const style = {
    'width': width,
  };

  const donat = [
    ['PATREON: ', 'tarasbilka'],
    ['PAYPAL: ', 'krapkamusic@gmail.com'],
    ['ПриватБанк: ', '5169 3600 1074 0896 (₴)'],
    ['Моно: ', '5375 4141 0269 6381'],
  ];

  const donatContent = donat.map((donation, index) => <p className={s.donat} key={index}><span>{donation[0]}</span>{donation[1]}</p>);

  return (
    <div className={s.footer} style={style}>
      <div className={s.footerContent}>
        <h3 className={s.title}>Підтримати наші проєкти можна тут:</h3>
        {donatContent}
      </div>
      <div className={s.social}>

        <Tg className={s.socialLink} />
        <Fb className={s.socialLink} />
        <Ins className={s.socialLink}/>
      </div>
    </div>
  );
};

export default Footer;
