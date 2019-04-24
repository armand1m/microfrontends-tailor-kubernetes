import { IncomingMessage } from "http";
import { Socket } from "net";
import getAbsoluteFragmentUrl from ".";

const TEST_HOST = "some-host-url";

const createRequest = () => {
  const request = new IncomingMessage(new Socket());
  request.headers.host = TEST_HOST;
  return request;
};

describe("helpers/get-absolute-fragment-url", () => {
  it("should return the same url when fragment url is a valid url", () => {
    const url = "http://some-other/some-path/some-fragment";
    const expected = "http://some-other/some-path/some-fragment";
    const request = createRequest();
    const result = getAbsoluteFragmentUrl(url, request);

    expect(result).toBe(expected);
  });

  it("should assemble url using request details when fragment url is a partial url", () => {
    const url = "/some-path/some-fragment";
    const expected = `http://${TEST_HOST}/some-path/some-fragment`;

    const request = createRequest();
    const result = getAbsoluteFragmentUrl(url, request);

    expect(result).toBe(expected);
  });
});
