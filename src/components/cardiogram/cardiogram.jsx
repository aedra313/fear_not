import React from 'react';
import TICK_VALUES from './tickValues';
import COORDINATES from './coordinates';
import CONDITIONS from './conditions';
import {LineSegment, VictoryAxis, VictoryChart, VictoryLine, VictoryScatter} from 'victory';
import Theme from './theme';
import TOTAL from './total';
import s from './cardiogram.module.css';
import useWidth from '../../hooks/useWidth';
import Labels from './labels/labels';
// import DATA from './data';
const Cardiogram = () => {
  const WIDTH = useWidth();
  console.log(TICK_VALUES);
  console.log(COORDINATES);
  console.log(CONDITIONS);
  console.log(TOTAL);
  // console.log(DATA.items.length());
  // console.log(DATA.items[2].day);
  const totalWidth = TOTAL * 54 + TOTAL;
  const container = {
    'width': WIDTH - 50 + 'px',
  };
  const wrap = {
    'width': totalWidth + 'px',
  };
  const strokeDasharray = '1, 48.3';
  return (
    <div>
      <div className={s.container} style={container}>
        <div className={s.wrap} style={wrap}>
          <VictoryChart
            width={totalWidth}
            theme={Theme}>
            <VictoryAxis crossAxis
              tickValues={TICK_VALUES}
              orientation="top"
              offsetX={0}

              standalone={false} />
            <VictoryAxis dependentAxis
              offsetX={0}
              gridComponent={<LineSegment x1='-25'/>}
              style={{
                grid: {
                  strokeDasharray,
                },
              }
              }/>

            <VictoryLine
              domain={{x: [0, 30], y: [0, 7]}}
              padding={{left: 70}}
              style={{
                data: {stroke: '#c43a31'},
                parent: {border: '1px solid #ccc'},
              }}
              data={COORDINATES}
            />
            <VictoryScatter size={3} data = {COORDINATES} style={{data: {fill: 'red'}}}/>
          </VictoryChart>
          <Labels />
        </div>
      </div>
    </div>
  );
};

export default Cardiogram;
