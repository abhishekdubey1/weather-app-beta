const mro = Math.round;
const converter = (ms1 = 1600494140, ms2 = 1600494140) => {
  let minute1 = (ms1 / (1000 * 60)) % 60;
  let hour1 = (ms1 / (1000 * 60 * 60)) % 24;
  let minute2 = (ms2 / (1000 * 60)) % 60;
  let hour2 = (ms2 / (1000 * 60 * 60)) % 24;
  return [mro(minute1), mro(hour1), mro(minute2), mro(hour2)];
};
export default converter;
