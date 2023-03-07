import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("health")
@Controller("health")
export class HealthController {
  @ApiOkResponse({ type: String })
  @Get()
  async health() {
    return new Date().toISOString();
  }
}
