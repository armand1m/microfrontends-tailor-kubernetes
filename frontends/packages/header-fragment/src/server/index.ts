import micro, { RequestHandler } from "micro";

import { HOST, PORT } from "./config";

const handler: RequestHandler = async (request, response) => {
  return "<h1>oi</h1>";
};

micro(handler).listen(PORT, HOST, () => {
  /* tslint:disable-next-line */
  console.log(`[Header Fragment]: Server running at ${PORT}`);
});
