import DATA from './data';

const COORDINATES = [];

// eslint-disable-next-line guard-for-in
for (const key in DATA.items) {
  COORDINATES.push(
      {
        x: DATA.items[key].day,
        y: DATA.items[key].id,
      });
}


export default COORDINATES;
