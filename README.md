# ☁️ grpc-nest

Type-safe thin wraper around [grpc-js](https://github.com/grpc/grpc-node) for [Nest.js](https://github.com/nestjs/nest) with support for promises.

> Note: This library is in an early development stage. Expect breaking changes.

## Installation

```bash
yarn add @nersent/grpc-nest
```

## [Example](/example/)

## Quick Start

### 1. Compile proto

```bash
yarn grpc-nest ./example/*.proto ./example/generated
```

### 2.

`index.ts`

```ts
import { createGrpcTransport } from '@nersent/grpc-nest'; 

const app = await NestFactory.create(AppModule);

app.connectMicroservice<MicroserviceOptions>(
  createGrpcTransport({ address: "0.0.0.0:4269" }, app),
);

await app.startAllMicroservices();
```

`app_module.ts`

```ts
import { GrpcModule } from '@nersent/grpc-nest';

@Module({
  imports: [GrpcModule],
  controllers: [ApiController]
})
export class AppModule {}
```


`api_controller.ts`

```ts
import {
  IExampleApiService,
  ExampleApiService,
} from "./generated/example_grpc_pb";
import {
  ExampleApiStatusRequest,
  ExampleApiStatusResponse,
} from "./generated/example_pb";

@GrpcController(ExampleApiService)
export class ApiController implements IGrpcController<IExampleApiService> {
  public async status(
    req: ExampleApiStatusRequest,
  ): Promise<ExampleApiStatusResponse> {
    const name = req.getName();
    const res = new ExampleApiStatusResponse();
    res.setMessage(name);
    return res;
  }
}
```
---

Made by [Nersent](https://nersent.com)
