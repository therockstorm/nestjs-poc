import { Injectable } from "@nestjs/common";
import { Cat, Prisma } from "@prisma/client";

import { PrismaService } from "./prisma.service";

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.CatCreateInput): Promise<Cat> {
    return this.prisma.cat.create({ data });
  }

  findAll(): Promise<Cat[]> {
    return this.prisma.cat.findMany();
  }
}
