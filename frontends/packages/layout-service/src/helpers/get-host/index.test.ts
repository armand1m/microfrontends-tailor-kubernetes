import { IncomingMessage } from "http";
import { Socket } from "net";
import getHost from ".";

describe("helpers/get-host", () => {
  it("should return expected host", () => {
    const request = new IncomingMessage(new Socket());
    request.headers.host = "expected-host";

    expect(getHost(request)).toBe(request.headers.host);
  });
});
