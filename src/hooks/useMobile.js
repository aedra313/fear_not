import {useEffect, useState} from 'react';

const useMobile = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
  });
  useEffect(() => {
    setIsMobile(width < 1440);
  });
  return isMobile;
};

export default useMobile;
