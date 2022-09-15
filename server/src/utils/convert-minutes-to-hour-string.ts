export function convertMinutesToHourString(timeInMinutes: number) {
  const minutes = timeInMinutes % 60;
  const hours = (timeInMinutes - minutes) / 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}
