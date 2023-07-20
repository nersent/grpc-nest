import { assert } from "console";

import * as grpc from "@grpc/grpc-js";
import { Injectable } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { CustomTransportStrategy, Server } from "@nestjs/microservices";

import { GrpcServerProvider } from "./grpc_server_provider";

export interface GrpcServerOptions {
  address: string;
  credentials?: grpc.ServerCredentials;
}

export const GRPC_SERVER_TOKEN = "XDGRPC_SERVER_TOKEN";

export const GRPC_SERVER_TRANSPORT_ID = Symbol(GRPC_SERVER_TOKEN);

export class GrpcServer extends Server implements CustomTransportStrategy {
  private readonly credentials: grpc.ServerCredentials;

  constructor(
    private readonly options: GrpcServerOptions,
    private readonly instance: grpc.Server,
  ) {
    super();
    this.credentials =
      options.credentials ?? grpc.ServerCredentials.createInsecure();
  }

  public get transportId(): symbol {
    return GRPC_SERVER_TRANSPORT_ID;
  }

  /**
   * This method is triggered when you run "app.listen()".
   */
  public listen(cb: (err: any, address?: string) => void): void {
    this.instance.bindAsync(
      this.options.address,
      this.credentials,
      (err, port) => {
        if (err) {
          return cb(err, undefined);
        }
        this.instance.start();
        cb(undefined, this.options.address);
      },
    );
  }

  public close(): void {
    this.instance.forceShutdown();
  }
}
