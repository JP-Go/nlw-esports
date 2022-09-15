export function convertHourStringToMinutes(hourString: string) {
  return hourString
    .split(':')
    .map(Number)
    .reduce((acc, item, index) => {
      return index === 0 ? item * 60 + acc : item + acc;
    }, 0);
}
