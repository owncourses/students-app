export function parseDurationInMinutesToString(
  duration_in_minutes: number = 0,
  options: { twoDigits: boolean } = { twoDigits: true }
): string {
  let hours = 0;
  let minutes = duration_in_minutes;

  if (minutes >= 60) {
    hours = Math.floor(minutes / 60);
    minutes = duration_in_minutes - hours * 60;
    return `${hours}:${
      options.twoDigits ? parseToTwoDigitNumber(minutes) : minutes
    }`;
  }

  return `${options.twoDigits ? parseToTwoDigitNumber(minutes) : minutes}`;
}

export function parseDurationInSecondsToString(
  duration_in_seconds: number = 0
): string {
  let minutes = 0;
  let seconds = duration_in_seconds;

  if (seconds >= 60) {
    minutes = Math.floor(seconds / 60);
    seconds = duration_in_seconds - minutes * 60;
    return `${parseToTwoDigitNumber(minutes)}:${parseToTwoDigitNumber(
      seconds
    )}`;
  }

  return `00:${parseToTwoDigitNumber(seconds)}`;
}

export function parseToTwoDigitNumber(number: number): string {
  return number > 9 ? "" + number : "0" + number;
}
