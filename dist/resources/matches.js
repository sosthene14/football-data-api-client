"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchesResource = void 0;
const constants_1 = require("../constants");
class MatchesResource {
    constructor(request) {
        this.request = request;
        this.basePath = constants_1.RESOURCE_PATHS.MATCHES;
    }
    /**
     * Récupère la liste des matchs
     */
    async list(params) {
        const response = await this.request.get(this.basePath, params);
        return response.data;
    }
    /**
     * Récupère les détails d'un match spécifique
     */
    async get(params) {
        const response = await this.request.get(`${this.basePath}/${params.id}`);
        return response.data;
    }
    /**
     * Récupère les matchs du jour
     */
    async getToday() {
        const today = new Date().toISOString().split('T')[0];
        return this.list({ dateFrom: today, dateTo: today });
    }
    /**
     * Récupère les matchs d'une compétition spécifique
     */
    async getByCompetition(competitionId, params) {
        const response = await this.request.get(`${constants_1.RESOURCE_PATHS.COMPETITIONS}/${competitionId}/matches`, params);
        return response.data;
    }
    /**
     * Récupère les têtes d'affiche
     */
    async getHeadToHead(team1Id, team2Id, limit) {
        const response = await this.request.get(`${this.basePath}`, { teams: `${team1Id},${team2Id}`, limit });
        return response.data;
    }
}
exports.MatchesResource = MatchesResource;
//# sourceMappingURL=matches.js.map