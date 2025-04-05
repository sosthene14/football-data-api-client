import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { handleApiError } from './error-handler';
import { ApiOptions } from '../types'; // adapte le chemin si besoin

export class ApiRequest {
  private axiosInstance: AxiosInstance;

  constructor(options: ApiOptions) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
      timeout: options.timeout || 10000,
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': options.apiKey,
        ...(options.headers || {})
      }
    });
  }

  public async get<T>(url: string, params?: Record<string, any>): Promise<AxiosResponse<T>> {
    try {
      return await this.axiosInstance.get<T>(url, { params });
    } catch (error) {
      handleApiError(error);
    }
  }

  public async post<T>(url: string, data?: any): Promise<AxiosResponse<T>> {
    try {
      return await this.axiosInstance.post<T>(url, data);
    } catch (error) {
      handleApiError(error);
    }
  }

  public async put<T>(url: string, data?: any): Promise<AxiosResponse<T>> {
    try {
      return await this.axiosInstance.put<T>(url, data);
    } catch (error) {
      handleApiError(error);
    }
  }

  public async delete<T>(url: string): Promise<AxiosResponse<T>> {
    try {
      return await this.axiosInstance.delete<T>(url);
    } catch (error) {
      handleApiError(error);
    }
  }
}
