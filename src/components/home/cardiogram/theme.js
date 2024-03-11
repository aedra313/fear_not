import {assign} from 'lodash';

// *
// * Colors
// *
const yellow200 = '#FFF59D';
const deepOrange600 = '#F4511E';
const lime300 = '#DCE775';
const lightGreen500 = '#8BC34A';
const teal700 = '#00796B';
const cyan900 = '#006064';
const colors = [
  deepOrange600,
  yellow200,
  lime300,
  lightGreen500,
  teal700,
  cyan900,
];
const blueGrey50 = '#ECEFF1';
const blueGrey300 = '#90A4AE';
const white = '#fff';
const grey900 = '#212121';
// *
// * Typography
// *
const sansSerif = '\'Hitch Hike\', \'Helvetica\', sans-serif';
const letterSpacing = 'normal';
const fontSize = 14;
// *
// * Layout
// *
const padding = 8;
const baseProps = {
  width: 350,
  height: 350,
  padding: 50,
  paddingLeft: 0,
  paddingRight: 0,
  margin: 0,
};
// *
// * Labels
// *
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: white,
  stroke: 'transparent',
  strokeWidth: 0,
};

const centeredLabelStyles = assign({textAnchor: 'middle'}, baseLabelStyles);
// *
// * Strokes
// *
const strokeDasharray = '1, 61';
const strokeLinecap = 'round';
const strokeLinejoin = 'round';

export const Theme = {
  area: assign(
      {
        style: {
          data: {
            fill: grey900,
          },
          labels: baseLabelStyles,
        },
      },
      baseProps,
  ),
  axis: assign(
      {
        style: {
          axis: {
            fill: 'transparent',
            stroke: blueGrey300,
            strokeWidth: 0,
            strokeLinecap,
            strokeLinejoin,
          },
          axisLabel: assign({}, centeredLabelStyles, {
            padding,
            stroke: 'transparent',
          }),
          grid: {
            fill: 'none',
            stroke: blueGrey50,
            strokeDasharray,
            strokeLinecap,
            strokeLinejoin,
            pointerEvents: 'painted',
          },
          ticks: {
            fill: 'transparent',
            size: 0,
            stroke: blueGrey300,
            strokeWidth: 1,
            strokeLinecap,
            strokeLinejoin,
          },
          tickLabels: assign({}, baseLabelStyles, {
            fill: white,
          }),
        },
      },
      baseProps,
  ),
  polarDependentAxis: assign({
    style: {
      ticks: {
        fill: 'transparent',
        size: 1,
        stroke: 'transparent',
      },
    },
  }),

  chart: baseProps,

  group: assign(
      {
        colorScale: colors,
      },
      baseProps,
  ),


  line: assign(
      {
        style: {
          data: {
            fill: 'transparent',
            opacity: 1,
            stroke: white,
            strokeWidth: 2,
          },
          labels: baseLabelStyles,
        },
      },
      baseProps,
  ),
  stack: assign(
      {
        colorScale: colors,
      },
      baseProps,
  ),
};

export default Theme;
