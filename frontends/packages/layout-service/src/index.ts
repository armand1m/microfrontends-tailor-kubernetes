import { IncomingMessage } from "http";
import micro, { RequestHandler } from "micro";

import Tailor from "node-tailor";

import { HOST, PORT, TEMPLATES_PATH } from "./config";
import fragmentHandler from "./handlers/fragment";
import templateHandler from "./handlers/template";

const tailor = new Tailor({
  /* buggy: must open PR yet */
  fetchTemplate: templateHandler(TEMPLATES_PATH) as any,
  /* buggy: https://github.com/zalando/tailor/pull/297 */
  requestFragment: fragmentHandler as any,
});

tailor.on("error", (request: IncomingMessage, error: Error) => {
  /* tslint:disable-next-line */
  console.error("\n[TAILOR ERROR]: ", error.message);
  /* tslint:disable-next-line */
  console.error("\n[TAILOR ERROR]: ", error.stack);
});

const handler: RequestHandler = async (request, response) => {
  response.setHeader("Cache-Control", "max-age=86400");

  return tailor.requestHandler(request, response);
};

micro(handler).listen(PORT, HOST, () => {
  /* tslint:disable-next-line */
  console.log(`[Layout Service]: Server running at ${PORT}`);
});
