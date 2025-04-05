"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_TIMEOUT = exports.ERROR_CODES = exports.HTTP_METHODS = exports.RESOURCE_PATHS = exports.API_BASE_URL = void 0;
exports.API_BASE_URL = 'https://api.football-data.org/v4';
exports.RESOURCE_PATHS = {
    COMPETITIONS: 'competitions',
    TEAMS: 'teams',
    MATCHES: 'matches',
    PLAYERS: 'players'
};
exports.HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
};
exports.ERROR_CODES = {
    UNAUTHORIZED: 'UNAUTHORIZED',
    BAD_REQUEST: 'BAD_REQUEST',
    NOT_FOUND: 'NOT_FOUND',
    RATE_LIMIT: 'RATE_LIMIT',
    SERVER_ERROR: 'SERVER_ERROR',
    NETWORK_ERROR: 'NETWORK_ERROR'
};
exports.DEFAULT_TIMEOUT = 30000; // 30 secondes
//# sourceMappingURL=constants.js.map