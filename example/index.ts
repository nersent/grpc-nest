import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions } from "@nestjs/microservices";

import { createGrpcTransport } from "../src";

import { AppModule } from "./app_module";

const runApp = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>(
    createGrpcTransport({ address: "0.0.0.0:4269" }, app),
  );

  await app.startAllMicroservices();
  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()}`);
};

runApp();
