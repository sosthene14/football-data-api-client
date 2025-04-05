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
}
exports.PlayersResource = PlayersResource;
//# sourceMappingURL=players.js.map