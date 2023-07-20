// package: 
// file: example.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ExampleApiStatusRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): ExampleApiStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExampleApiStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExampleApiStatusRequest): ExampleApiStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExampleApiStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExampleApiStatusRequest;
    static deserializeBinaryFromReader(message: ExampleApiStatusRequest, reader: jspb.BinaryReader): ExampleApiStatusRequest;
}

export namespace ExampleApiStatusRequest {
    export type AsObject = {
        name: string,
    }
}

export class ExampleApiStatusResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): ExampleApiStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExampleApiStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExampleApiStatusResponse): ExampleApiStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExampleApiStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExampleApiStatusResponse;
    static deserializeBinaryFromReader(message: ExampleApiStatusResponse, reader: jspb.BinaryReader): ExampleApiStatusResponse;
}

export namespace ExampleApiStatusResponse {
    export type AsObject = {
        message: string,
    }
}
