import { AxiosResponse } from 'axios';
import { ApiOptions } from '../types';
export declare class ApiRequest {
    private axiosInstance;
    constructor(options: ApiOptions);
    get<T>(url: string, params?: Record<string, any>): Promise<AxiosResponse<T>>;
    post<T>(url: string, data?: any): Promise<AxiosResponse<T>>;
    put<T>(url: string, data?: any): Promise<AxiosResponse<T>>;
    delete<T>(url: string): Promise<AxiosResponse<T>>;
}
