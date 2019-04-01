import { IncomingMessage } from "http";
import getHost from ".";

describe("helpers/get-host", () => {
  it("should return expected host", () => {
    const request = new IncomingMessage(null);
    request.headers.host = "expected-host";

    expect(getHost(request)).toBe(request.headers.host);
  });
});
