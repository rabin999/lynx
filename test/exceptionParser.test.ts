import ExceptionParser from "../app/global/service/parser/ExceptionParser"
import HttpException from "../app/global/exception/HttpException"

describe("Testing Exception with Error Instance", () => {
    const httpexception: HttpException = new HttpException({ statusCode: 500, title: "This is title", description: "test" })
    const exceptionParser: ExceptionParser = ExceptionParser.parse(httpexception.params)

    it("should return error as json based on httpexception params", () => {
        expect(httpexception.parse()).toMatchObject(exceptionParser)
    })
})


describe("Testing Exception with Core Error Instance", () => {
    const error = new Error("This is title")
    const exceptionParser: any = ExceptionParser.parse(error);

    it("should return error as json based on Error params", () => {
        expect(exceptionParser.error.title).toEqual(error.message);
        expect(exceptionParser.error.description).toEqual(error.stack);
    })
})
