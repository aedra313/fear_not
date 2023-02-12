import DATA from './data';

const CONDITIONS = [];

// eslint-disable-next-line guard-for-in
for (const key in DATA.items) {
  CONDITIONS.push(
      {
        civilian: DATA.items[key].civil,
        military: DATA.items[key].military,
        faggots: DATA.items[key].faggot,
        id: key,

      });
}


export default CONDITIONS;
