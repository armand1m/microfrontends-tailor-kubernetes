import { IncomingMessage } from "http";
import { Span } from "opentracing";

import filterRequestHeaders from "node-tailor/lib/filter-headers";
import requestFragment from "node-tailor/lib/request-fragment";

import getAbsoluteFragmentUrl from "../../helpers/get-absolute-fragment-url";

interface IFragmentAttributes {
  id: string;
  src: string;
  async?: boolean;
  fallbackUrl?: string;
  primary?: boolean;
  public?: boolean;
  [key: string]: any;
}

type FragmentHandlerFunction = (
  fragmentUrl: string,
  fragmentAttributes: IFragmentAttributes,
  request: IncomingMessage,
  span?: Span,
) => any;

const enhancedRequestFragment = requestFragment(filterRequestHeaders);

const fragmentHandler: FragmentHandlerFunction =
  (fragmentUrl, fragmentAttributes, request, span) =>
    enhancedRequestFragment(getAbsoluteFragmentUrl(fragmentUrl, request), fragmentAttributes, request, span);

export default fragmentHandler;
