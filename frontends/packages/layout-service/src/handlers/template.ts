import { IncomingMessage } from "http";
import fetchTemplateFn from "node-tailor/lib/fetch-template";
import getContextUrl from "../helpers/get-context-url";

const mapping = {
  "/": "/index",
  "/index": "/index",
  "notFound": "/404",
};

const mapPathnameToTemplateUrl = (pathname: string = "/") => {
  return mapping[pathname] || mapping.notFound;
};

const handleTemplate = (templatesPath: string) =>
  (request: IncomingMessage, parseTemplate: any) => {
    const { pathname } = new URL(request.url, getContextUrl(request));

    const requestClone = {
      ...request,
      url: mapPathnameToTemplateUrl(pathname),
    };

    return fetchTemplateFn(templatesPath)(requestClone, parseTemplate);
  };

export default handleTemplate;
