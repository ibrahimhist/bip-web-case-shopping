import { faker } from '@faker-js/faker';

import { Product } from '../models';

export function createRandomProduct(): Product {
  return {
    id: faker.string.uuid(),
    price: parseInt(faker.commerce.price({ min: 1, max: 1000, dec: 0 })),
    name: faker.commerce.productName(),
    image: faker.image.url(),
    category: faker.commerce.department(),
    quantity: faker.number.int(10),
  };
}

export const getRandomProducts = (count: number): Product[] =>
  new Array(count).fill(null).map((x) => createRandomProduct());
