import { IncomingMessage } from "http";
import getBaseUrl from "../get-base-url";

/**
 * ## getAbsoluteFragmentUrl
 *
 * This method tries to build an absolute url for the fragment.
 *
 * The logic is pretty simple:
 *
 * If it doesn't fails to create an instance of the url
 * then it means it is a valid full url.
 *
 * However, if it is a partial url like `/some-path/my-fragment`,
 * then it will get the base url from the request and build the
 * url with it.
 */
const getAbsoluteFragmentUrl = (fragmentUrl: string, request: IncomingMessage) => {
  try {
    return new URL(fragmentUrl) && fragmentUrl;
  } catch (error) {
    return getBaseUrl(request) + fragmentUrl;
  }
};

export default getAbsoluteFragmentUrl;
