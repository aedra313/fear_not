import React from 'react';
import TICK_VALUES from './tickValues';
import COORDINATES from './coordinates';
import {VictoryAxis, VictoryChart, VictoryLine, VictoryScatter} from 'victory';
import Theme from './theme';
import TOTAL from './total';
import s from './cardiogram.module.css';
import useWidth from '../../hooks/useWidth';
import Labels from './labels/labels';
import totalWidth from './TOTALWIDTH';
// import DATA from './data';
const Cardiogram = () => {
  const WIDTH = useWidth();
  console.log(TICK_VALUES);
  console.log(COORDINATES);
  console.log(TOTAL);
  // console.log(DATA.items.length());
  // console.log(DATA.items[2].day);
  const container = {
    'width': WIDTH - 30 + 'px',
  };
  const wrap = {
    'width': totalWidth + 'px',
  };
  // const strokeDasharray = '1, 48.3';
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
            {/* <VictoryAxis dependentAxis
              offsetX={90}
              gridComponent={<LineSegment x1='22.2'/>}
              style={{
                grid: {
                  strokeDasharray,
                },
              }
              }/>*/}

            <VictoryLine
              domain={{x: [0, TOTAL], y: [0, 7]}}
              /* padding={{left: 70}}*/

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
