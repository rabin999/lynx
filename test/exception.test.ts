import HttpException from "../app/global/exception/HttpException";

describe("Testing HTTP Exception Class", () => {
  const exception: HttpException = new HttpException({
    statusCode: 500,
    title: "EXCEPTION",
    description: "Something went wrong"
  });

  it("Should test component", () => {
    expect(500).toEqual(exception.params.statusCode);
    expect("Something went wrong").toEqual(exception.params.description);
    expect(exception.options).toEqual({});
    expect(true).toEqual(typeof exception.params.description === "string");
  });

  it("should test instances", () => {
    expect(true).toEqual(exception instanceof HttpException);
  });
});
