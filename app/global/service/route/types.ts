import { FastifyRequest, FastifyReply } from "fastify"
import { Http2ServerRequest, Http2ServerResponse } from "http2"
import { IncomingMessage, ServerResponse } from "http"

interface LynxRequest extends  FastifyRequest<Http2ServerRequest | IncomingMessage> {}
interface LynxResponse extends  FastifyReply<Http2ServerResponse | ServerResponse> {}

export {
    LynxRequest, LynxResponse
}
