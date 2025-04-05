"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompetitionsResource = void 0;
const constants_1 = require("../constants");
class CompetitionsResource {
    constructor(request) {
        this.request = request;
        this.basePath = constants_1.RESOURCE_PATHS.COMPETITIONS;
    }
    /**
     * Récupère la liste des compétitions
     */
    async list(params) {
        const response = await this.request.get(this.basePath, params);
        return response.data;
    }
    /**
     * Récupère les détails d'une compétition spécifique
     */
    async get(params) {
        const response = await this.request.get(`${this.basePath}/${params.id}`);
        return response.data;
    }
    /**
     * Récupère le classement d'une compétition
     */
    async getStandings(competitionId) {
        const response = await this.request.get(`${this.basePath}/${competitionId}/standings`);
        return response.data;
    }
    /**
     * Récupère les buteurs d'une compétition
     */
    async getScorers(competitionId, limit) {
        const response = await this.request.get(`${this.basePath}/${competitionId}/scorers`, { limit });
        return response.data;
    }
}
exports.CompetitionsResource = CompetitionsResource;
//# sourceMappingURL=competitions.js.map