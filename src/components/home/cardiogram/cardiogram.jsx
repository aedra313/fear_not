import React, {useMemo} from 'react';
import {VictoryAxis, VictoryChart, VictoryLine, VictoryScatter} from 'victory';
import Theme from './theme';
import s from './cardiogram.module.css';
import useWidth from '../../../hooks/useWidth';
import Labels from './labels/labels';
import {useSelector} from 'react-redux';
import {selectData} from '../../../reducers/cardiogramDataSlice';


const Cardiogram = () => {
  const DATA = useSelector(selectData);
  const TOTAL = DATA.length;
  const totalWidth = TOTAL * 54 + TOTAL;

  const TICK_VALUES = useMemo(() => {
    const values = [];
    for (let i = 1; i <= TOTAL; i++) {
      values.push(i);
    }
    return values;
  }, [TOTAL]);

  const COORDINATES = useMemo(() => {
    const coordinates = [];
    for (let key = 0; key < TOTAL; key++) {
      coordinates.push({
        x: DATA[key].day,
        y: DATA[key].id,
      });
    }
    return coordinates;
  }, [DATA, TOTAL]);

  const WIDTH = useWidth();

  const container = {
    'width': WIDTH - 30 + 'px',
  };

  const wrap = {
    'width': totalWidth + 'px',
  };


  return (
    <div>
      <div className={s.container} style={container}>
        <div className={s.wrap} style={wrap}>
          <VictoryChart
            width={totalWidth}
            theme={Theme}
            domainPadding={{x: 50}}>

            <VictoryAxis crossAxis
              width={totalWidth}
              tickValues={TICK_VALUES}
              orientation="top"
              domain={[0, TOTAL]}

              standalone={false} />

            <VictoryLine
              domain={{x: [0, TOTAL], y: [0, 7]}}

              style={{
                data: {stroke: '#fff'},
                parent: {border: '1px solid #ccc'},
              }}
              data={COORDINATES}
            />
            <VictoryScatter size={4} data = {COORDINATES} style={{data: {fill: 'white'}}}/>
          </VictoryChart>
          <Labels />
        </div>
      </div>
    </div>
  );
};

export default Cardiogram;
