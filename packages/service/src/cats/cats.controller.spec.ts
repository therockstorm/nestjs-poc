import { Test, type TestingModule } from "@nestjs/testing";

import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";

describe("CatsController", () => {
  let controller: CatsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    controller = app.get<CatsController>(CatsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
