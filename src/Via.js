import axios from 'axios';
import { ViaError } from './errors';
class Via {
    constructor(config) {
        this.httpCli = axios.create({
            baseURL: config.url || 'https://router-api.via.exchange',
            timeout: config.timeout || 30 * 1000,
        });
        this.apiKey = config.apiKey;
    }
    async getRoutes(params) {
        try {
            const res = await this.httpCli.get('/api/v1/routes', { params: { apiKey: this.apiKey, ...params } });
            return res.data;
        }
        catch (e) {
            if (axios.isAxiosError(e)) {
                throw new ViaError(e.response?.status, e.response?.data?.message);
            }
            else {
                throw e;
            }
        }
    }
    async getAllowanceStatus(params) {
        try {
            const res = await this.httpCli.get('/api/v2/approval/check-allowance', { params: { apiKey: this.apiKey, ...params } });
            return res.data;
        }
        catch (e) {
            if (axios.isAxiosError(e)) {
                throw new ViaError(e.response?.status, e.response?.data?.message);
            }
            else {
                throw e;
            }
        }
    }
    async buildApprovalTx(params) {
        try {
            const res = await this.httpCli.get('/api/v2/approval/build-tx', { params: { apiKey: this.apiKey, ...params } });
            return res.data;
        }
        catch (e) {
            if (axios.isAxiosError(e)) {
                throw new ViaError(e.response?.status, e.response?.data?.message);
            }
            else {
                throw e;
            }
        }
    }
    async buildTx(params) {
        try {
            const res = await this.httpCli.get('/api/v2/send/build-tx', { params: { apiKey: this.apiKey, ...params } });
            return res.data;
        }
        catch (e) {
            if (axios.isAxiosError(e)) {
                throw new ViaError(e.response?.status, e.response?.data?.message);
            }
            else {
                throw e;
            }
        }
    }
}
export default Via;
