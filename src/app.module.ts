import { Module } from "@nestjs/common";

import { CatsController } from "./cats/cats.controller";
import { CatsService } from "./cats/cats.service";
import { HealthController } from "./health/health.controller";

@Module({
  controllers: [CatsController, HealthController],
  imports: [],
  providers: [CatsService],
})
export class AppModule {}
