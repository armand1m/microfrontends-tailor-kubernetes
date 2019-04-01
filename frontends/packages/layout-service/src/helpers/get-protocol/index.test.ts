import { IncomingMessage } from "http";
import getProtocol from ".";

describe("helpers/get-protocol", () => {
  it("should return http by default", () => {
    const request = new IncomingMessage(null);

    expect(getProtocol(request)).toBe("http");
  });

  it("should return https when connection is encrypted", () => {
    const request = new IncomingMessage(null);
    request.headers.host = "expected-host";
    (request.connection as any) = {
      encrypted: true,
    };

    expect(getProtocol(request)).toBe("https");
  });

  it("should return X-Forwarded-Proto content if present", () => {
    const request = new IncomingMessage(null);
    request.headers["X-Forwarded-Proto"] = "https";

    expect(getProtocol(request)).toBe("https");
  });
});
