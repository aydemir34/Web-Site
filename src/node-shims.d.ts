declare module "node:fs" {
  const fs: {
    readFileSync(path: string, encoding: BufferEncoding): string;
    writeFileSync(path: string, data: string): void;
  };
  export default fs;
}

declare module "node:path" {
  const path: {
    dirname(path: string): string;
    join(...paths: string[]): string;
    relative(from: string, to: string): string;
    resolve(...paths: string[]): string;
  };
  export default path;
}

declare module "node:url" {
  export function fileURLToPath(url: string | URL): string;
}

type BufferEncoding = "utf8";

declare const process: {
  argv: string[];
  cwd(): string;
  exit(code?: number): never;
};
