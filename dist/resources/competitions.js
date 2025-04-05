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
   * Retrieves the list of competitions
   */
    async list(params) {
        const response = await this.request.get(this.basePath, params);
        return response.data;
    }
    /**
   * Retrieves details of a specific competition
   */
    async get(params) {
        const response = await this.request.get(`${this.basePath}/${params.id}`);
        return response.data;
    }
    /**
  * Retrieves the ranking of a competition
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
    /**
   * Récupère les matchs d'une compétition spécifique
   */
    async getMatches(competitionId, params) {
        const response = await this.request.get(`${this.basePath}/${competitionId}/matches`, params);
        return response.data;
    }
    /**
     * Récupère les équipes participant à une compétition spécifique
     */
    async getTeams(competitionId, season) {
        const response = await this.request.get(`${this.basePath}/${competitionId}/teams`, { season });
        return response.data;
    }
    /**
     * Récupère le calendrier des journées d'une compétition
     */
    async getMatchday(competitionId, params) {
        const response = await this.request.get(`${this.basePath}/${competitionId}/matchday`, params);
        return response.data;
    }
}
exports.CompetitionsResource = CompetitionsResource;
//# sourceMappingURL=competitions.js.map