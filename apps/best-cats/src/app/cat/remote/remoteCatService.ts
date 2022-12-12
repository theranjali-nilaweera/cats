import * as request from 'superagent';
import { createLog } from '../../logs/logging';
const log = createLog(__filename);
const baseUrl = 'https://api.thecatapi.com';

export const getRemoteCats = async (): Promise<any> => {
    log.info('getRemoteCats');
    return getResponse(baseUrl + '/v1/breeds');
};

const getResponse = async (url: string) => {
    try {
        log.info(`getResponse ${url}`);
        const respone = await request
            .get(url)
            .timeout({ response: 20000 });
        return (!!respone && respone.text) ? JSON.parse(respone.text) : [];
    } catch (err) {
        log.debug(err);
        if (!!err && err.status === 404) {
            return Promise.resolve([]);
        }
    }
}
