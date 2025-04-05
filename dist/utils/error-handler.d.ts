export declare class FootballApiError extends Error {
    readonly code: string;
    readonly status?: number;
    constructor(message: string, code: string, status?: number);
}
export declare function handleApiError(error: unknown): never;
