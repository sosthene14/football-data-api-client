import { ApiRequest } from '../utils/request';
import { Match, MatchDetailParams, MatchListParams, MatchResponse } from '../types/match.types';
export declare class MatchesResource {
    private request;
    private basePath;
    constructor(request: ApiRequest);
    /**
     * Récupère la liste des matchs
     */
    list(params?: MatchListParams): Promise<MatchResponse>;
    /**
     * Récupère les détails d'un match spécifique
     */
    get(params: MatchDetailParams): Promise<Match>;
    /**
     * Récupère les matchs du jour
     */
    getToday(): Promise<MatchResponse>;
    /**
     * Récupère les matchs d'une compétition spécifique
     */
    getByCompetition(competitionId: number | string, params?: Omit<MatchListParams, 'competitions'>): Promise<MatchResponse>;
    /**
     * Récupère les têtes d'affiche
     */
    getHeadToHead(team1Id: number | string, team2Id: number | string, limit?: number): Promise<MatchResponse>;
}
