import { ApiRequest } from '../utils/request';
import { Player, PlayerDetailParams, PlayerResponse } from '../types/player.types';
export declare class PlayersResource {
    private request;
    private basePath;
    constructor(request: ApiRequest);
    /**
     * Récupère les détails d'un joueur spécifique
     */
    get(params: PlayerDetailParams): Promise<Player>;
    /**
     * Récupère les matchs d'un joueur
     */
    getMatches(playerId: number | string, params?: {
        dateFrom?: string;
        dateTo?: string;
        status?: string | string[];
        competitions?: string | number[];
        limit?: number;
    }): Promise<any>;
    /**
     * Recherche de joueurs par nom
     */
    search(name: string, limit?: number): Promise<PlayerResponse>;
}
