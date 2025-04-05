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
    /**
   * Récupère les statistiques d'un joueur
   */
    getStatistics(playerId: number | string, params?: {
        competition?: string | number;
        season?: string | number;
    }): Promise<any>;
    /**
     * Récupère les joueurs d'une équipe spécifique
     */
    getByTeam(teamId: number | string): Promise<PlayerResponse>;
    /**
     * Récupère les transferts d'un joueur
     */
    getTransfers(playerId: number | string): Promise<any>;
    /**
     * Récupère les trophées d'un joueur
     */
    getTrophies(playerId: number | string): Promise<any>;
    /**
     * Récupère les joueurs par nationalité
     */
    getByNationality(nationality: string, limit?: number): Promise<PlayerResponse>;
    /**
     * Récupère les joueurs par position
     */
    getByPosition(position: string, limit?: number): Promise<PlayerResponse>;
    /**
     * Récupère les joueurs par âge
     */
    getByAge(ageFrom: number, ageTo: number, limit?: number): Promise<PlayerResponse>;
    /**
     * Récupère les statistiques de but d'un joueur
     */
    getGoalStatistics(playerId: number | string, params?: {
        competition?: string | number;
        season?: string | number;
    }): Promise<any>;
    /**
     * Récupère l'historique de contrats d'un joueur
     */
    getContractHistory(playerId: number | string): Promise<any>;
}
