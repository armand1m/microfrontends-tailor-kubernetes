import { IncomingMessage } from "http";
import fetchTemplateFn from "node-tailor/lib/fetch-template";
import getContextUrl from "../helpers/get-context-url";

const mapping = {
  "/": "/index",
  "/index": "/index",
};

export default (templatesPath: string) =>
  (request: IncomingMessage, parseTemplate: any) => {
    const url = new URL(request.url, getContextUrl(request));
    const pathname = url.pathname;

    const requestClone = {
      ...request,
      url: mapping[pathname || "/"],
    };

    return fetchTemplateFn(templatesPath)(requestClone, parseTemplate);
  };
