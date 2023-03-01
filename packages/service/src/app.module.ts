import { Module } from "@nestjs/common";

import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";
import { PrismaService } from "./prisma.service";

@Module({
  controllers: [CatsController],
  imports: [],
  providers: [CatsService, PrismaService],
})
export class AppModule {}
