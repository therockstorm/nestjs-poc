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
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
