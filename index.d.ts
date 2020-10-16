import { RequestHandler } from "express";

declare function errorWrap(fn: RequestHandler): RequestHandler
export default errorWrap;
