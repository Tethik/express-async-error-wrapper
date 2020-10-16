import { RequestHandler } from "express";

declare function errorWrap(fn: RequestHandler|Function): RequestHandler
export default errorWrap;
