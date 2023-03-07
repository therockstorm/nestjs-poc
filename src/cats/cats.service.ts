import { Injectable } from "@nestjs/common";
import type { Cat, Prisma } from "@prisma/client";

const CAT: Cat = { age: 2, breed: "test", id: 1, name: "test" };

@Injectable()
export class CatsService {
  async create(data: Prisma.CatCreateInput): Promise<Cat> {
    console.log(data);
    return CAT;
    // return this.prisma.cat.create({ data });
  }

  async findAll(): Promise<Cat[]> {
    return [CAT];
    // return this.prisma.cat.findMany();
  }

  async findOne(id: number): Promise<Cat | undefined> {
    console.log(id);
    return CAT;
    // return (await this.prisma.cat.findFirst({ where: { id } })) ?? undefined;
  }

  async delete(id: number): Promise<Cat> {
    console.log(id);
    return CAT;
    // return this.prisma.cat.delete({ where: { id } });
  }
}
