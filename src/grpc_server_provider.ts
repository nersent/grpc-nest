import { Server } from "@grpc/grpc-js";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GrpcServerProvider {
  public readonly instance: Server;

  constructor() {
    this.instance = new Server();
  }
}
