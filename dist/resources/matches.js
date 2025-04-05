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
    /**
   * Récupère les matchs d'une équipe spécifique
   */
    async getByTeam(teamId, params) {
        const response = await this.request.get(`${constants_1.RESOURCE_PATHS.TEAMS}/${teamId}/matches`, params);
        return response.data;
    }
    /**
     * Récupère les matchs en fonction de leur statut
     */
    async getByStatus(status, params) {
        const statusParam = Array.isArray(status) ? status.join(',') : status;
        const response = await this.request.get(this.basePath, { ...params, status: statusParam });
        return response.data;
    }
    /**
     * Récupère les matchs à venir
     */
    async getUpcoming(limit) {
        const response = await this.request.get(this.basePath, { status: 'SCHEDULED', limit });
        return response.data;
    }
    /**
     * Récupère les matchs terminés récemment
     */
    async getFinished(limit, dateFrom) {
        const defaultDateFrom = dateFrom || new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        const response = await this.request.get(this.basePath, { status: 'FINISHED', dateFrom: defaultDateFrom, limit });
        return response.data;
    }
    /**
     * Récupère les matchs en direct
     */
    async getLive() {
        const response = await this.request.get(this.basePath, { status: 'LIVE,IN_PLAY,PAUSED' });
        return response.data;
    }
    /**
     * Récupère les statistiques d'un match spécifique
     */
    async getStatistics(matchId) {
        const response = await this.request.get(`${this.basePath}/${matchId}/statistics`);
        return response.data;
    }
    /**
     * Récupère les événements détaillés d'un match (buts, cartons, remplacements, etc.)
     */
    async getEvents(matchId) {
        const response = await this.request.get(`${this.basePath}/${matchId}/events`);
        return response.data;
    }
    /**
     * Récupère les compositions d'équipe pour un match
     */
    async getLineups(matchId) {
        const response = await this.request.get(`${this.basePath}/${matchId}/lineups`);
        return response.data;
    }
    /**
     * Récupère les matchs pour une date spécifique
     */
    async getByDate(date) {
        return this.list({ dateFrom: date, dateTo: date });
    }
    /**
     * Récupère les matchs pour une période spécifique
     */
    async getByDateRange(dateFrom, dateTo, params) {
        return this.list({ ...params, dateFrom, dateTo });
    }
}
exports.MatchesResource = MatchesResource;
//# sourceMappingURL=matches.js.map