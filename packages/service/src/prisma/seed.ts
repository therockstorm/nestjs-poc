import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");
  await Promise.all(
    [
      {
        age: 1,
        breed: "Siamese",
        name: "Alice",
      },
      {
        age: 3,
        breed: "Burmese",
        name: "Bob",
      },
    ].map((data) => prisma.cat.create({ data }))
  );
}

main()
  .then(async () => prisma.$disconnect())
  // eslint-disable-next-line unicorn/prefer-top-level-await
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    throw new Error("Failed to seed database.");
  });
