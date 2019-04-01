import { IncomingMessage } from "http";

const getProtocol = (request: IncomingMessage) => {
  const assumedProtocol = (request.connection as any).encrypted ? "https" : "http";
  const protocolFromHeader = request["X-Forwarded-Proto"];

  return protocolFromHeader || assumedProtocol;
};

const getHost = (request: IncomingMessage) => request.headers.host;

const getContextUrl = (request: IncomingMessage) => {
  const protocol = getProtocol(request);
  const host = getHost(request);

  return `${protocol}://${host}`;
};

export default getContextUrl;
