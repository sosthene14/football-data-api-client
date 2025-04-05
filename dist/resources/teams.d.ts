import { ApiRequest } from '../utils/request';
import { Team, TeamDetailParams, TeamListParams, TeamResponse } from '../types/team.types';
import { MatchResponse } from '../types/match.types';
export declare class TeamsResource {
    private request;
    private basePath;
    constructor(request: ApiRequest);
    /**
     * Récupère la liste des équipes
     */
    list(params?: TeamListParams): Promise<TeamResponse>;
    /**
     * Récupère les détails d'une équipe spécifique
     */
    get(params: TeamDetailParams): Promise<Team>;
    /**
     * Récupère les matchs d'une équipe
     */
    getMatches(teamId: number | string, params?: {
        dateFrom?: string;
        dateTo?: string;
        status?: string | string[];
        venue?: 'HOME' | 'AWAY';
        limit?: number;
    }): Promise<MatchResponse>;
    /**
     * Récupère l'effectif complet d'une équipe
     */
    getSquad(teamId: number | string): Promise<Team>;
}
