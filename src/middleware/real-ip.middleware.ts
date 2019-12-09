import { Response } from 'express';
import { RequestWithIp } from '../interfaces/Request';
import { IncomingHttpHeaders } from 'http';

function getRealIp(reqIp: string, heads: IncomingHttpHeaders): string {
    const xFor = heads['x-forwarded-for'];

    if (!xFor || !xFor.length) {
        return reqIp;
    }

    const ips = Array.isArray(xFor) ? xFor : xFor.split(',');

    if (ips.length > 1) {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const realIp = ips.pop() as string;
        heads['x-forwarded-for'] = ips.join(',');
        return realIp;
    } else {
        delete heads['x-forwarded-for'];
        return ips[0];
    }
}

export function realIpMiddleware(req: RequestWithIp, res: Response, next: Function) {

    req.realIp = 'youRealIp';

    next();
}
