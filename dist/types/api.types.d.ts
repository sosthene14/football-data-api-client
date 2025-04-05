export interface ApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
}
export interface PaginationParams {
    page?: number;
    limit?: number;
}
export interface ApiHeaders {
    'X-Auth-Token': string;
    [key: string]: string;
}
export interface ApiOptions {
    baseUrl: string;
    apiKey: string;
    headers?: Record<string, string>;
    timeout?: number;
}
export interface ApiError {
    message: string;
    code: string;
    status?: number;
}
