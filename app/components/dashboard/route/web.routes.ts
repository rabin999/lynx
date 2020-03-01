// import DashboardController from "../controller/dashboard.controller"
// import HttpException from "../../../global/exception/HttpException"
// import { LynxRequest, LynxResponse } from "../../../global/service/route/types"

// export default function(fastify: any, opts: any, done: any) {
//     fastify.get("/web", { 
//         onRequest: function (request: LynxRequest, reply: LynxResponse, done:any) {
//             const authorized = true
//             if (authorized) {
//                 request.log.info('This hook will always be executed after the shared `onRequest` hooks')
//                 done()
//             } else {
//                 const errs = new HttpException({
//                     status: 422,
//                     message: "User is not authorized"
//                 })
//                 reply.code(422).send(errs.parse())
//             }
//         } 
//     }, new DashboardController().index)

//     fastify.post("/web/create", new DashboardController().create)
//     fastify.delete("/web/:id/delete", new DashboardController().delete)

//     done()
// }