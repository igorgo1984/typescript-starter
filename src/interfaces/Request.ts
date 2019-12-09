import { Request } from 'express';

interface RequestWithIp extends Request {
  realIp: string;
}

export {
  RequestWithIp,
};
