import { getRandomInteger } from "../../numbers/getRandomInteger/getRandomInteger";

export function getRandomElement<El>(array: El[]): El | undefined {
  if (array.length === 0) {
    return undefined;
  }

  return array[getRandomInteger(0, array.length - 1)]
}
