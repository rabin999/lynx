import HttpException from "../src/exceptions/HttpException"

describe('Testing HTTP Exception Class', () => {
    const exception = new HttpException({
        status: 500,
        message: "Something went wrong",
    })

    it('Should test component', () => {
        expect(500).toEqual(exception.params.status)
        expect("Something went wrong").toEqual(exception.message)
        expect(exception.options).toEqual({})
        expect(true).toEqual(typeof exception.params.message === "string")
    })

    it('should test instances', () => {
        expect(true).toEqual(exception instanceof HttpException)
    })
})