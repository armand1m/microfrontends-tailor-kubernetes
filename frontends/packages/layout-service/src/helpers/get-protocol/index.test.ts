import { IncomingMessage } from "http";
import { Socket } from "net";
import getProtocol from ".";

describe("helpers/get-protocol", () => {
  it("should return http by default", () => {
    const request = new IncomingMessage(new Socket());

    expect(getProtocol(request)).toBe("http");
  });

  it("should return https when connection is encrypted", () => {
    const request = new IncomingMessage(new Socket());
    request.headers.host = "expected-host";
    (request.connection as any) = {
      encrypted: true,
    };

    expect(getProtocol(request)).toBe("https");
  });

  it("should return X-Forwarded-Proto content if present", () => {
    const request = new IncomingMessage(new Socket());
    request.headers["X-Forwarded-Proto"] = "https";

    expect(getProtocol(request)).toBe("https");
  });
});
