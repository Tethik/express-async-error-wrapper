import { NextFunction, Request, Response } from "express";

declare function errorWrap(req: Request, res: Response, next: NextFunction) 
export default errorWrap;
