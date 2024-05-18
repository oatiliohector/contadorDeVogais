import { Name } from './Name';
import { randomElement } from './utils/randomArray';

const firstNames = ['John', 'Jane', 'Alex', 'Emily', 'Chris', 'Katie'];
const lastNames = ['Smith', 'Doe', 'Brown', 'Johnson', 'Williams', 'Jones'];

export function generateName(): Name {
  return {
    firstName: randomElement(firstNames),
    lastName: randomElement(lastNames),
  };
}
