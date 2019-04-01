import { IncomingMessage } from "http";

const getHost = (request: IncomingMessage) => {
  return request.headers.host;
};

export default getHost;
