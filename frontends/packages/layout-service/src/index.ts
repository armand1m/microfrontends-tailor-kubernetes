import createDebug from "debug";
import micro from "micro";
import Tailor from "node-tailor";

import { HOST, PORT, TEMPLATES_PATH } from "./config";
import fragmentHandler from "./handlers/fragment";
import templateHandler from "./handlers/template";
import routes from "./routes";

const debug = createDebug("[Layout Service]");
const debugTailorError = debug.extend("[TAILOR ERROR]");

const tailor = new Tailor({
  /* buggy types: https://github.com/zalando/tailor/pull/298 */
  fetchTemplate: templateHandler({
    routes,
    templatesPath: TEMPLATES_PATH,
  }) as any,
  /* buggy types: https://github.com/zalando/tailor/pull/297 */
  requestFragment: fragmentHandler as any,
});

tailor.on("error", (_ /* request */, error: Error) => {
  debugTailorError(error.message);
  debugTailorError(error.stack);
});

micro(tailor.requestHandler).listen(PORT, HOST, () => {
  debug(`Server running at ${PORT}`);
});
