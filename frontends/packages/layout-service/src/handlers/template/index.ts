import { IncomingMessage } from "http";
import fetchTemplate from "node-tailor/lib/fetch-template";
import getRequestPathname from "../../helpers/get-request-pathname";

interface IRoutesMap {
  notFound: string;
}

interface ITemplateHandlerProps {
  routes: IRoutesMap;
  templatesPath: string;
}

const mapPathnameToTemplateUrl = (pathname: string = "/", routes: IRoutesMap) =>
  routes[pathname] || routes.notFound;

const mapRequestToTemplateRequest = (request: IncomingMessage, routes: IRoutesMap) => ({
  ...request,
  url: mapPathnameToTemplateUrl(getRequestPathname(request), routes),
});

const templateHandler = ({
  routes,
  templatesPath,
}: ITemplateHandlerProps) =>
  (request: IncomingMessage, parseTemplate: any) =>
    fetchTemplate(templatesPath)(mapRequestToTemplateRequest(request, routes), parseTemplate);

export default templateHandler;
