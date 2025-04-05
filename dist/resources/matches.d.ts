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
    /**
   * Récupère les matchs d'une équipe spécifique
   */
    getByTeam(teamId: number | string, params?: Omit<MatchListParams, 'teams'>): Promise<MatchResponse>;
    /**
     * Récupère les matchs en fonction de leur statut
     */
    getByStatus(status: string | string[], params?: Omit<MatchListParams, 'status'>): Promise<MatchResponse>;
    /**
     * Récupère les matchs à venir
     */
    getUpcoming(limit?: number): Promise<MatchResponse>;
    /**
     * Récupère les matchs terminés récemment
     */
    getFinished(limit?: number, dateFrom?: string): Promise<MatchResponse>;
    /**
     * Récupère les matchs en direct
     */
    getLive(): Promise<MatchResponse>;
    /**
     * Récupère les statistiques d'un match spécifique
     */
    getStatistics(matchId: number | string): Promise<any>;
    /**
     * Récupère les événements détaillés d'un match (buts, cartons, remplacements, etc.)
     */
    getEvents(matchId: number | string): Promise<any>;
    /**
     * Récupère les compositions d'équipe pour un match
     */
    getLineups(matchId: number | string): Promise<any>;
    /**
     * Récupère les matchs pour une date spécifique
     */
    getByDate(date: string): Promise<MatchResponse>;
    /**
     * Récupère les matchs pour une période spécifique
     */
    getByDateRange(dateFrom: string, dateTo: string, params?: Omit<MatchListParams, 'dateFrom' | 'dateTo'>): Promise<MatchResponse>;
}
