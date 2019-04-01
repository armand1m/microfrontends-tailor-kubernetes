import { IncomingMessage } from "http";

import getHost from "../get-host";
import getProtocol from "../get-protocol";

const getContextUrl = (request: IncomingMessage) => {
  return `${getProtocol(request)}://${getHost(request)}`;
};

export default getContextUrl;
