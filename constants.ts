export const API_BASE_URL = 'https://api.football-data.org/v4';

export const RESOURCE_PATHS = {
  COMPETITIONS: 'competitions',
  TEAMS: 'teams',
  MATCHES: 'matches',
  PLAYERS: 'players'
};

export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

export const ERROR_CODES = {
  UNAUTHORIZED: 'UNAUTHORIZED',
  BAD_REQUEST: 'BAD_REQUEST',
  NOT_FOUND: 'NOT_FOUND',
  RATE_LIMIT: 'RATE_LIMIT',
  SERVER_ERROR: 'SERVER_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR'
};

export const DEFAULT_TIMEOUT = 30000; // 30 secondes