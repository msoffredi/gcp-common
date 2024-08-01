import { Request } from '@google-cloud/functions-framework';

export class RequestHelper {
    public static getPath = (req: Request): string => {
        const xEnvoyOriginalPath = req.headers['x-envoy-original-path'];

        if (typeof xEnvoyOriginalPath === 'string') {
            const pathElements = xEnvoyOriginalPath.split('?');
            return String(pathElements[0]);
        }

        return '';
    };

    public static logReq = (req: Request): string => {
        return JSON.stringify({
            method: req.method,
            headers: req.headers,
            body: req.body,
            query: req.query,
        });
    };
}
