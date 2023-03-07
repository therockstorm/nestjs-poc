import { Injectable } from "@nestjs/common";
import type { Cat, Prisma } from "@prisma/client";

import { PrismaService } from "./prisma.service";

@Injectable()
export class CatsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.CatCreateInput): Promise<Cat> {
    return this.prisma.cat.create({ data });
  }

  async findAll(): Promise<Cat[]> {
    return this.prisma.cat.findMany();
  }

  async findOne(id: number): Promise<Cat | undefined> {
    return (await this.prisma.cat.findFirst({ where: { id } })) ?? undefined;
  }

  async delete(id: number): Promise<Cat> {
    return this.prisma.cat.delete({ where: { id } });
  }
}
