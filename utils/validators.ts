import { ApiOptions } from '../types/api.types';

export function validateApiKey(apiKey: string): void {
  if (!apiKey || typeof apiKey !== 'string' || apiKey.trim() === '') {
    throw new Error('Une clé API valide est requise');
  }
}

export function validateOptions(options: Partial<ApiOptions>): void {
  if (options.baseUrl && (typeof options.baseUrl !== 'string' || options.baseUrl.trim() === '')) {
    throw new Error('L\'URL de base doit être une chaîne valide');
  }
  
  if (options.timeout !== undefined && (typeof options.timeout !== 'number' || options.timeout <= 0)) {
    throw new Error('Le délai d\'attente doit être un nombre positif');
  }
  
  if (options.headers && (typeof options.headers !== 'object' || options.headers === null)) {
    throw new Error('Les en-têtes doivent être un objet valide');
  }
}

export function validateId(id: number | string): boolean {
  if (typeof id === 'number') {
    return id > 0;
  }
  
  if (typeof id === 'string') {
    return id.trim() !== '';
  }
  
  return false;
}

export function formatDate(date: Date | string): string {
  if (typeof date === 'string') {
    return date;
  }
  
  return date.toISOString().split('T')[0];
}