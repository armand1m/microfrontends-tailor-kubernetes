import { IncomingMessage } from "http";

const getProtocol = (request: IncomingMessage) => {
  const connection = (request.connection || {}) as any;
  const assumedProtocol = connection.encrypted ? "https" : "http";
  const protocolFromHeader = request.headers["X-Forwarded-Proto"];

  return protocolFromHeader || assumedProtocol;
};

export default getProtocol;
