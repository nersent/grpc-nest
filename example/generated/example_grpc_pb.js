// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var example_pb = require('./example_pb.js');

function serialize_ExampleApiStatusRequest(arg) {
  if (!(arg instanceof example_pb.ExampleApiStatusRequest)) {
    throw new Error('Expected argument of type ExampleApiStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ExampleApiStatusRequest(buffer_arg) {
  return example_pb.ExampleApiStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ExampleApiStatusResponse(arg) {
  if (!(arg instanceof example_pb.ExampleApiStatusResponse)) {
    throw new Error('Expected argument of type ExampleApiStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ExampleApiStatusResponse(buffer_arg) {
  return example_pb.ExampleApiStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExampleApiService = exports.ExampleApiService = {
  status: {
    path: '/ExampleApi/Status',
    requestStream: false,
    responseStream: false,
    requestType: example_pb.ExampleApiStatusRequest,
    responseType: example_pb.ExampleApiStatusResponse,
    requestSerialize: serialize_ExampleApiStatusRequest,
    requestDeserialize: deserialize_ExampleApiStatusRequest,
    responseSerialize: serialize_ExampleApiStatusResponse,
    responseDeserialize: deserialize_ExampleApiStatusResponse,
  },
};

exports.ExampleApiClient = grpc.makeGenericClientConstructor(ExampleApiService);
