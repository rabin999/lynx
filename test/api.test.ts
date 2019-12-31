import request from "supertest"
import App from "../app/app"

describe("GET /health -> ", () => {
    it("should return 200 ok with status UP", async (done: any) => {
        const result = await request(App).get('/');
        console.log('-------------------------')
        console.log(result)

        expect(result.status).toBe(200);
        done();
    })
})