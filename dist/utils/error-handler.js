"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootballApiError = void 0;
exports.handleApiError = handleApiError;
const constants_1 = require("../constants");
class FootballApiError extends Error {
    constructor(message, code, status) {
        super(message);
        this.name = 'FootballApiError';
        this.code = code;
        this.status = status;
    }
}
exports.FootballApiError = FootballApiError;
function handleApiError(error) {
    if (error instanceof FootballApiError) {
        throw error;
    }
    const axiosError = error;
    // Erreur réseau
    if (axiosError.code === 'ECONNABORTED') {
        throw new FootballApiError('La requête a expiré', constants_1.ERROR_CODES.NETWORK_ERROR);
    }
    if (!axiosError.response) {
        throw new FootballApiError('Erreur réseau', constants_1.ERROR_CODES.NETWORK_ERROR);
    }
    // Erreurs API
    const status = axiosError.response.status;
    const data = axiosError.response.data;
    const message = (data === null || data === void 0 ? void 0 : data.message) || axiosError.message || 'Une erreur est survenue';
    let code = constants_1.ERROR_CODES.SERVER_ERROR;
    switch (status) {
        case 400:
            code = constants_1.ERROR_CODES.BAD_REQUEST;
            break;
        case 401:
        case 403:
            code = constants_1.ERROR_CODES.UNAUTHORIZED;
            break;
        case 404:
            code = constants_1.ERROR_CODES.NOT_FOUND;
            break;
        case 429:
            code = constants_1.ERROR_CODES.RATE_LIMIT;
            break;
    }
    throw new FootballApiError(message, code, status);
}
//# sourceMappingURL=error-handler.js.map