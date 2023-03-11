import { createServer, Response } from "miragejs";

export default function () {
  console.warn("Starting mock mirage server...");

  createServer({
    routes() {},
  });
}
