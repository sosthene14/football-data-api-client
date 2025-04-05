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
}
exports.TeamsResource = TeamsResource;
//# sourceMappingURL=teams.js.map