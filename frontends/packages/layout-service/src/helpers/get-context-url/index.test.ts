import { IncomingMessage } from "http";
import getContextUrl from ".";

describe("helpers/get-context-url", () => {
  it("should return expected https url", () => {
    const request = new IncomingMessage(null);
    request.headers.host = "expected-host";
    (request.connection as any) = {
      encrypted: true,
    };

    const expectedUrl = "https://expected-host";

    expect(getContextUrl(request)).toBe(expectedUrl);
  });

  it("should return expected http url", () => {
    const request = new IncomingMessage(null);
    request.headers.host = "expected-host";

    /** TODO: verify if this is really needed */
    (request.connection as any) = {};

    const expectedUrl = "http://expected-host";

    expect(getContextUrl(request)).toBe(expectedUrl);
  });
});
