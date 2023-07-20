import { Module } from "@nestjs/common";

import { GrpcModule } from "../src";

import { ApiController } from "./api_controller";
import { ApiService } from "./api_service";

@Module({
  imports: [GrpcModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class AppModule {}
