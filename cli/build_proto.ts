import { spawn } from "child_process";
import { dirname, join, resolve } from "path";

import { ensureDir } from "@nersent/node-utils";
import execa from "execa";

const generateGrpc = async (
  protoPath: string,
  outputPath: string,
): Promise<void> => {
  await ensureDir(dirname(protoPath), outputPath);

  const grpcToolsPath = join(
    "node_modules",
    ".bin",
    "grpc_tools_node_protoc.cmd",
  );
  const grpcPluginPath = join(
    "node_modules",
    ".bin",
    "grpc_tools_node_protoc_plugin.cmd",
  );
  const protocGenTsPath = join("node_modules", ".bin", "protoc-gen-ts.cmd");

  const iPath = join(dirname(protoPath));
  const outPath = join(outputPath);
  const inputPath = protoPath;

  const nodeProtocRes = await execa(
    grpcToolsPath,
    [
      `--js_out=import_style=commonjs,binary:${outPath}`,
      `--grpc_out=grpc_js:${outPath}`,
      `--plugin=protoc-gen-grpc=${grpcPluginPath}`,
      `--proto_path=${iPath}`,
      `${inputPath}`,
    ],
    {
      stdio: "inherit",
    },
  );

  const tscProtocRes = await execa(
    `protoc`,
    [
      `--plugin=protoc-gen-ts=${protocGenTsPath}`,
      `--ts_out=grpc_js:${outPath}`,
      `--proto_path=${iPath}`,
      `${inputPath}`,
    ],
    {
      stdio: "inherit",
    },
  );

  console.log(`Successfully generated grpc files at ${outputPath}`);
};

// Get arguments from command line
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error("Usage: node generateGrpc.js <protoPath> <outputPath>");
  process.exit(1);
}

generateGrpc(args[0], args[1]);
