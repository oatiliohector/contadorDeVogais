import { randomInt } from "./randomNumber";

export function randomElement<T>(array: T[]): T {
    return array[randomInt(0, array.length - 1)];
}
