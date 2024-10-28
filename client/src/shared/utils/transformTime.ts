export function transformTime(value: string) {
  const [date, time] = value.split("/");
  const [day, month] = date.split(".");
  return `2024-${month}-${day} ${time}:00`;
}
