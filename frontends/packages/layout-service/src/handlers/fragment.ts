import { IncomingMessage } from "http";
import { Url } from "url";

import filterReqHeadersFn from "node-tailor/lib/filter-headers";
import requestFragmentFn from "node-tailor/lib/request-fragment";

import getContextUrl from "~/helpers/get-context-url";

const enhancedRequestFragment = requestFragmentFn(filterReqHeadersFn);

interface IAttributes {
  id: string;
  src: string;
  async?: boolean;
  fallbackUrl?: string;
  primary?: boolean;
  public?: boolean;
  [key: string]: any;
}

const handleFragment = (
  fragmentUrl: Url,
  fragmentAttributes: IAttributes,
  request: IncomingMessage,
  span = null,
) => {
  const formattedFragmentUrl = getContextUrl(request) + fragmentUrl;

  /* tslint:disable-next-line */
  console.log("\n[TAILOR LOG]: Requesting fragment at ", formattedFragmentUrl);

  return enhancedRequestFragment(formattedFragmentUrl, fragmentAttributes, request, span);
};

export default handleFragment;
