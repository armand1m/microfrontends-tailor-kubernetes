import { IncomingMessage } from "http";

const getProtocol = (request: IncomingMessage) => {
  const assumedProtocol = (request.connection as any).encrypted ? "https" : "http";
  const protocolFromHeader = request["X-Forwarded-Proto"];

  return protocolFromHeader || assumedProtocol;
};

export default getProtocol;
