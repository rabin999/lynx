import { FastifyRequest, FastifyReply } from "fastify"
import {Http2ServerRequest, Http2ServerResponse} from 'http2'

interface LynxRequest extends  FastifyRequest<Http2ServerRequest> {}
interface LynxResponse extends  FastifyReply<Http2ServerResponse> {}

export {
    LynxRequest, LynxResponse
}