import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";

import { Cat, CreateCatDto } from "../dto";
import { CatsService } from "./cats.service";

@ApiTags("cats")
@Controller("cats")
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiCreatedResponse({ type: Cat })
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @ApiOkResponse({ isArray: true, type: Cat })
  @Get()
  async findAll() {
    return this.catsService.findAll();
  }

  @ApiOkResponse({ type: Cat })
  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }

  @ApiOkResponse({ type: Cat })
  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.catsService.delete(id);
  }
}
