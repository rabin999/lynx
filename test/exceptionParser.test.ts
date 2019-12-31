import ExceptionParser from "../app/global/service/parser/ExceptionParser"
import HttpException from "../app/global/exception/HttpException"

describe('Testing Exception with Error Instance', () => {
    const httpexception = new HttpException({ status: 500, title: "This is title", message: "test" })
    const exceptionParser = new ExceptionParser(httpexception.params)

    it('should return error as json based on httpexception params', () => {
        expect(httpexception.parse()).toMatchObject(exceptionParser.parse())
    })
})


describe('Testing Exception with Core Error Instance', () => {
    const error = new Error("This is title")
    const exceptionParser = new ExceptionParser(error)

    it('should return error as json based on Error params', () => {
        expect(exceptionParser.errors.message).toEqual(error.message)
    })
})