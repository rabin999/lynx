import request from "supertest"
import App from "../src/app"

const app = new App().app
describe("GET /api/v1", () => {
    it("should reeturn 200 ok", async (done: any) => {
        const result = await request(app).get('/api/v1');
        expect(result.status).toBe(200);
        done();
    })
})

// describe("POST /signup", () => {
//     it("should return some defined error message with valid parameters", (done) => {
//         return request(app).post("/signup")
//             .field("fullname", "Test User")
//             .field("email", "johtestn@me.com")
//             .field("password", "Hunter2")
//             .field("role", "admin")
//             .field("designation", "342324234234")
//             .expect(422)
//             .end(function (err, res) {
//                 expect(res.error).not.toBe(undefined)
//                 done();
//             });
//     })
// })
