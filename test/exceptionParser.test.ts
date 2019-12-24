import HttpException from "../src/exceptions/HttpException"
import ExceptionPaser from "../src/services/parser/ExceptionParser"
import mongoose from "mongoose"

describe('Testing Exception with Error Instance', () => {
    const httpexception = new HttpException({ status: 500, title: "This is title", message: "test" })
    const exceptionParser = new ExceptionPaser(httpexception.params)

    it('should return error as json based on httpexception params', () => {
        expect(httpexception.parse()).toMatchObject(exceptionParser.parse())
    })
})


describe('Testing Exception with Core Error Instance', () => {
    const error = new Error("This is title")
    const exceptionParser = new ExceptionPaser(error)

    it('should return error as json based on Error params', () => {
        expect(exceptionParser.errors.message).toEqual(error.message)
    })
})