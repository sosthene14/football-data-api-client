"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayersResource = void 0;
const constants_1 = require("../constants");
class PlayersResource {
    constructor(request) {
        this.request = request;
        this.basePath = constants_1.RESOURCE_PATHS.PLAYERS;
    }
    /**
     * Récupère les détails d'un joueur spécifique
     */
    async get(params) {
        const response = await this.request.get(`${this.basePath}/${params.id}`);
        return response.data;
    }
    /**
     * Récupère les matchs d'un joueur
     */
    async getMatches(playerId, params) {
        const response = await this.request.get(`${this.basePath}/${playerId}/matches`, params);
        return response.data;
    }
    /**
     * Recherche de joueurs par nom
     */
    async search(name, limit) {
        const response = await this.request.get(`${this.basePath}`, { name, limit });
        return response.data;
    }
    /**
   * Récupère les statistiques d'un joueur
   */
    async getStatistics(playerId, params) {
        const response = await this.request.get(`${this.basePath}/${playerId}/statistics`, params);
        return response.data;
    }
    /**
     * Récupère les joueurs d'une équipe spécifique
     */
    async getByTeam(teamId) {
        const response = await this.request.get(`${constants_1.RESOURCE_PATHS.TEAMS}/${teamId}/players`);
        return response.data;
    }
    /**
     * Récupère les transferts d'un joueur
     */
    async getTransfers(playerId) {
        const response = await this.request.get(`${this.basePath}/${playerId}/transfers`);
        return response.data;
    }
    /**
     * Récupère les trophées d'un joueur
     */
    async getTrophies(playerId) {
        const response = await this.request.get(`${this.basePath}/${playerId}/trophies`);
        return response.data;
    }
    /**
     * Récupère les joueurs par nationalité
     */
    async getByNationality(nationality, limit) {
        const response = await this.request.get(`${this.basePath}`, { nationality, limit });
        return response.data;
    }
    /**
     * Récupère les joueurs par position
     */
    async getByPosition(position, limit) {
        const response = await this.request.get(`${this.basePath}`, { position, limit });
        return response.data;
    }
    /**
     * Récupère les joueurs par âge
     */
    async getByAge(ageFrom, ageTo, limit) {
        const response = await this.request.get(`${this.basePath}`, { ageFrom, ageTo, limit });
        return response.data;
    }
    /**
     * Récupère les statistiques de but d'un joueur
     */
    async getGoalStatistics(playerId, params) {
        const response = await this.request.get(`${this.basePath}/${playerId}/goals`, params);
        return response.data;
    }
    /**
     * Récupère l'historique de contrats d'un joueur
     */
    async getContractHistory(playerId) {
        const response = await this.request.get(`${this.basePath}/${playerId}/contracts`);
        return response.data;
    }
}
exports.PlayersResource = PlayersResource;
//# sourceMappingURL=players.js.map