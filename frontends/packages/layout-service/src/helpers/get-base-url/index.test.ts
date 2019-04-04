import { IncomingMessage } from "http";
import getBaseUrl from ".";

describe("helpers/get-base-url", () => {
  it("should return expected https url", () => {
    const request = new IncomingMessage(null);
    request.headers.host = "expected-host";
    (request.connection as any) = {
      encrypted: true,
    };

    const expectedUrl = "https://expected-host";

    expect(getBaseUrl(request)).toBe(expectedUrl);
  });

  it("should return expected http url", () => {
    const request = new IncomingMessage(null);
    request.headers.host = "expected-host";

    const expectedUrl = "http://expected-host";

    expect(getBaseUrl(request)).toBe(expectedUrl);
  });
});
