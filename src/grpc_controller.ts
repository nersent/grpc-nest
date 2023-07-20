import "reflect-metadata";
import * as grpc from "@grpc/grpc-js";
import { CustomDecorator, SetMetadata } from "@nestjs/common";
import { CONTROLLER_WATERMARK, PATH_METADATA } from "@nestjs/common/constants";

type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : symbol extends K
    ? never
    : K]: T[K];
};

type InferMethodNames<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];

export type IGrpcController<
  T extends grpc.ServiceDefinition<any> = grpc.ServiceDefinition<any>,
> = {
  [K in keyof RemoveIndexSignature<T>]: T[K] extends grpc.MethodDefinition<
    infer TReq,
    infer TRes
  >
    ? GrpcControllerUnaryMethod<TReq, TRes>
    : never;
};

export type GrpcControllerUnaryMethod<TReq = any, TRes = any> = (
  req: TReq,
) => Promise<TRes> | TRes;

export const GRPC_CONTROLLER_SERVICE_DEF_METADATA =
  "GRPC_CONTROLLER_SERVICE_DEF_METADATA";

export const GrpcController = <S extends grpc.ServiceDefinition<any>>(
  service: S,
): ClassDecorator => {
  return (target: object) => {
    Reflect.defineMetadata(CONTROLLER_WATERMARK, true, service);
    Reflect.defineMetadata(
      GRPC_CONTROLLER_SERVICE_DEF_METADATA,
      service,
      target,
    );
    Reflect.defineMetadata(PATH_METADATA, "", target);
  };
};
