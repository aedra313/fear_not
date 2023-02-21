import DATA from '../data';
import checker from './checker';

const mixer = (day, item) => {
  if (item%2) {
    // eslint-disable-next-line guard-for-in
    for (const prop in DATA.items[item]) {
      checker('civil', item, prop, day);
    }
    // eslint-disable-next-line guard-for-in
    for (const prop in DATA.items[item]) {
      checker('military', item, prop, day);
      checker('faggot', item, prop, day);
    }
  } else {
    // eslint-disable-next-line guard-for-in
    for (const prop in DATA.items[item]) {
      checker('military', item, prop, day);
      checker('civil', item, prop, day);
      checker('faggot', item, prop, day);
    }
  }
  return day;
};
export default mixer;
