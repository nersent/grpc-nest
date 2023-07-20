// package: 
// file: example.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as example_pb from "./example_pb";

interface IExampleApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    status: IExampleApiService_IStatus;
}

interface IExampleApiService_IStatus extends grpc.MethodDefinition<example_pb.ExampleApiStatusRequest, example_pb.ExampleApiStatusResponse> {
    path: "/ExampleApi/Status";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<example_pb.ExampleApiStatusRequest>;
    requestDeserialize: grpc.deserialize<example_pb.ExampleApiStatusRequest>;
    responseSerialize: grpc.serialize<example_pb.ExampleApiStatusResponse>;
    responseDeserialize: grpc.deserialize<example_pb.ExampleApiStatusResponse>;
}

export const ExampleApiService: IExampleApiService;

export interface IExampleApiServer extends grpc.UntypedServiceImplementation {
    status: grpc.handleUnaryCall<example_pb.ExampleApiStatusRequest, example_pb.ExampleApiStatusResponse>;
}

export interface IExampleApiClient {
    status(request: example_pb.ExampleApiStatusRequest, callback: (error: grpc.ServiceError | null, response: example_pb.ExampleApiStatusResponse) => void): grpc.ClientUnaryCall;
    status(request: example_pb.ExampleApiStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: example_pb.ExampleApiStatusResponse) => void): grpc.ClientUnaryCall;
    status(request: example_pb.ExampleApiStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.ExampleApiStatusResponse) => void): grpc.ClientUnaryCall;
}

export class ExampleApiClient extends grpc.Client implements IExampleApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public status(request: example_pb.ExampleApiStatusRequest, callback: (error: grpc.ServiceError | null, response: example_pb.ExampleApiStatusResponse) => void): grpc.ClientUnaryCall;
    public status(request: example_pb.ExampleApiStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: example_pb.ExampleApiStatusResponse) => void): grpc.ClientUnaryCall;
    public status(request: example_pb.ExampleApiStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.ExampleApiStatusResponse) => void): grpc.ClientUnaryCall;
}
