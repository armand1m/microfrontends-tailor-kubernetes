import { IncomingMessage } from "http";

import getHost from "~/helpers/get-host";
import getProtocol from "~/helpers/get-protocol";

const getContextUrl = (request: IncomingMessage) => {
  return `${getProtocol(request)}://${getHost(request)}`;
};

export default getContextUrl;
