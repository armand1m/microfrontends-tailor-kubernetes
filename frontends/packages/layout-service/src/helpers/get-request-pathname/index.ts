import { IncomingMessage } from "http";
import getBaseUrl from "../get-base-url";

const getRequestPathname = (request: IncomingMessage) => {
  return new URL(request.url, getBaseUrl(request)).pathname;
};

export default getRequestPathname;
