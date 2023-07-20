import { GrpcController, IGrpcController } from "../src";

import { ApiService } from "./api_service";
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
  constructor(private readonly apiService: ApiService) {}

  public async status(
    req: ExampleApiStatusRequest,
  ): Promise<ExampleApiStatusResponse> {
    const name = req.getName();
    const message = await this.apiService.getStatus(name);
    const res = new ExampleApiStatusResponse();
    res.setMessage(message);
    return res;
  }
}
