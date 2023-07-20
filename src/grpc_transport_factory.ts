import assert from "assert";

import { INestApplication } from "@nestjs/common";
import { MicroserviceOptions } from "@nestjs/microservices";

import {
  GRPC_SERVER_TOKEN,
  GrpcServer,
  GrpcServerOptions,
} from "./grpc_server";
import { GrpcServerProvider } from "./grpc_server_provider";

export const createGrpcTransport = (
  options: GrpcServerOptions,
  app: INestApplication<any>,
): MicroserviceOptions => {
  const provider = app.get(GrpcServerProvider, {});
  assert(
    provider instanceof GrpcServerProvider,
    "GrpcServerProvider is not GrpcServer",
  );

  return {
    strategy: new GrpcServer(options, provider.instance),
    options: {
      package: GRPC_SERVER_TOKEN,
      port: 6900,
    },
  };
};
