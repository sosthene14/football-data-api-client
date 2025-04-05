"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRequest = void 0;
const axios_1 = __importDefault(require("axios"));
const error_handler_1 = require("./error-handler");
class ApiRequest {
    constructor(options) {
        this.axiosInstance = axios_1.default.create({
            baseURL: options.baseUrl,
            timeout: options.timeout || 10000,
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': options.apiKey,
                ...(options.headers || {})
            }
        });
    }
    async get(url, params) {
        try {
            return await this.axiosInstance.get(url, { params });
        }
        catch (error) {
            (0, error_handler_1.handleApiError)(error);
        }
    }
    async post(url, data) {
        try {
            return await this.axiosInstance.post(url, data);
        }
        catch (error) {
            (0, error_handler_1.handleApiError)(error);
        }
    }
    async put(url, data) {
        try {
            return await this.axiosInstance.put(url, data);
        }
        catch (error) {
            (0, error_handler_1.handleApiError)(error);
        }
    }
    async delete(url) {
        try {
            return await this.axiosInstance.delete(url);
        }
        catch (error) {
            (0, error_handler_1.handleApiError)(error);
        }
    }
}
exports.ApiRequest = ApiRequest;
//# sourceMappingURL=request.js.map