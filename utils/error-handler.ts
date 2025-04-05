import { AxiosError } from 'axios';
import {  ERROR_CODES } from '../constants';

export class FootballApiError extends Error {
  public readonly code: string;
  public readonly status?: number;
  
  constructor(message: string, code: string, status?: number) {
    super(message);
    this.name = 'FootballApiError';
    this.code = code;
    this.status = status;
  }
}

export function handleApiError(error: unknown): never {
  if (error instanceof FootballApiError) {
    throw error;
  }
  
  const axiosError = error as AxiosError;
  
  // Erreur réseau
  if (axiosError.code === 'ECONNABORTED') {
    throw new FootballApiError(
      'La requête a expiré',
      ERROR_CODES.NETWORK_ERROR
    );
  }
  
  if (!axiosError.response) {
    throw new FootballApiError(
      'Erreur réseau',
      ERROR_CODES.NETWORK_ERROR
    );
  }
  
  // Erreurs API
  const status = axiosError.response.status;
  const data = axiosError.response.data as any;
  const message = data?.message || axiosError.message || 'Une erreur est survenue';
  
  let code = ERROR_CODES.SERVER_ERROR;
  
  switch (status) {
    case 400:
      code = ERROR_CODES.BAD_REQUEST;
      break;
    case 401:
    case 403:
      code = ERROR_CODES.UNAUTHORIZED;
      break;
    case 404:
      code = ERROR_CODES.NOT_FOUND;
      break;
    case 429:
      code = ERROR_CODES.RATE_LIMIT;
      break;
  }
  
  throw new FootballApiError(message, code, status);
}