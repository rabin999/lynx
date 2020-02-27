import { FastifyRequest, FastifyReply } from "fastify"

interface LynxRequest extends  FastifyRequest {}
interface LynxResponse extends  FastifyReply<any> {}

export {
    LynxRequest, LynxResponse
}