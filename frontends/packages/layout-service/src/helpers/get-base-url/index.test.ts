import { IncomingMessage } from "http";
import { Socket } from "net";
import getBaseUrl from ".";

describe("helpers/get-base-url", () => {
  it("should return expected https url", () => {
    const request = new IncomingMessage(new Socket());
    request.headers.host = "expected-host";
    (request.connection as any) = {
      encrypted: true,
    };

    const expectedUrl = "https://expected-host";

    expect(getBaseUrl(request)).toBe(expectedUrl);
  });

  it("should return expected http url", () => {
    const request = new IncomingMessage(new Socket());
    request.headers.host = "expected-host";

    const expectedUrl = "http://expected-host";

    expect(getBaseUrl(request)).toBe(expectedUrl);
  });
});
