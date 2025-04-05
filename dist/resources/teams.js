"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsResource = void 0;
const constants_1 = require("../constants");
class TeamsResource {
    constructor(request) {
        this.request = request;
        this.basePath = constants_1.RESOURCE_PATHS.TEAMS;
    }
    /**
     * Récupère la liste des équipes
     */
    async list(params) {
        const response = await this.request.get(this.basePath, params);
        return response.data;
    }
    /**
     * Récupère les détails d'une équipe spécifique
     */
    async get(params) {
        const response = await this.request.get(`${this.basePath}/${params.id}`);
        return response.data;
    }
    /**
     * Récupère les matchs d'une équipe
     */
    async getMatches(teamId, params) {
        const response = await this.request.get(`${this.basePath}/${teamId}/matches`, params);
        return response.data;
    }
    /**
     * Récupère l'effectif complet d'une équipe
     */
    async getSquad(teamId) {
        const response = await this.request.get(`${this.basePath}/${teamId}`);
        return response.data;
    }
    /**
   * Récupère les équipes d'une compétition spécifique
   */
    async getByCompetition(competitionId, season) {
        const response = await this.request.get(`${constants_1.RESOURCE_PATHS.COMPETITIONS}/${competitionId}/teams`, { season });
        return response.data;
    }
    /**
     * Recherche d'équipes par nom
     */
    async search(name, limit) {
        const response = await this.request.get(this.basePath, { name, limit });
        return response.data;
    }
    /**
     * Récupère les matchs à venir d'une équipe
     */
    async getUpcomingMatches(teamId, limit) {
        const response = await this.request.get(`${this.basePath}/${teamId}/matches`, { status: 'SCHEDULED', limit });
        return response.data;
    }
    /**
     * Récupère les derniers matchs d'une équipe
     */
    async getLastMatches(teamId, limit) {
        const response = await this.request.get(`${this.basePath}/${teamId}/matches`, { status: 'FINISHED', limit, orderBy: 'date', order: 'desc' });
        return response.data;
    }
    /**
     * Récupère les statistiques d'une équipe
     */
    async getStatistics(teamId, params) {
        const response = await this.request.get(`${this.basePath}/${teamId}/statistics`, params);
        return response.data;
    }
    /**
     * Récupère les transferts d'une équipe
     */
    async getTransfers(teamId) {
        const response = await this.request.get(`${this.basePath}/${teamId}/transfers`);
        return response.data;
    }
    /**
     * Récupère le palmarès d'une équipe
     */
    async getTrophies(teamId) {
        const response = await this.request.get(`${this.basePath}/${teamId}/trophies`);
        return response.data;
    }
    /**
     * Récupère les équipes par pays
     */
    async getByCountry(country, limit) {
        const response = await this.request.get(this.basePath, { country, limit });
        return response.data;
    }
    /**
     * Récupère les équipes par ville
     */
    async getByCity(city, limit) {
        const response = await this.request.get(this.basePath, { city, limit });
        return response.data;
    }
    /**
     * Récupère le calendrier des matchs d'une équipe
     */
    async getFixtures(teamId, season) {
        const response = await this.request.get(`${this.basePath}/${teamId}/fixtures`, { season });
        return response.data;
    }
    /**
     * Récupère le classement d'une équipe dans ses compétitions
     */
    async getStandings(teamId, season) {
        const response = await this.request.get(`${this.basePath}/${teamId}/standings`, { season });
        return response.data;
    }
}
exports.TeamsResource = TeamsResource;
//# sourceMappingURL=teams.js.map