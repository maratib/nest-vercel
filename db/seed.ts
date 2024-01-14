import { faker } from "@faker-js/faker";
import { db } from "./db";

import { users, type NewUser } from '../src/drizzle/schema';

const main = async () => {
  console.log('Seeding starts ...');
  const data: NewUser[] = [];

  data.push({
    email: 'admin@mail.com',
  },
    {
      email: 'user@mail.com',
    }
  )

  // for (let index = 0; index < 4; index++) {
  //   const name = faker.internet.userName();
  //   data.push({
  //     user: name,
  //     email: faker.internet.email(),
  //     password: faker.internet.password(),
  //     name: name,
  //   })
  // }

  // console.log(data);
  try {
    await db.insert(users).values(data)
  } catch (error: any) {
    console.log(error.message);
  }
  console.log('Seeding done ...');
}

main();
