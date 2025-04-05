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
    /**
   * Récupère les équipes d'une compétition spécifique
   */
    getByCompetition(competitionId: number | string, season?: string | number): Promise<TeamResponse>;
    /**
     * Recherche d'équipes par nom
     */
    search(name: string, limit?: number): Promise<TeamResponse>;
    /**
     * Récupère les matchs à venir d'une équipe
     */
    getUpcomingMatches(teamId: number | string, limit?: number): Promise<MatchResponse>;
    /**
     * Récupère les derniers matchs d'une équipe
     */
    getLastMatches(teamId: number | string, limit?: number): Promise<MatchResponse>;
    /**
     * Récupère les statistiques d'une équipe
     */
    getStatistics(teamId: number | string, params?: {
        competition?: string | number;
        season?: string | number;
    }): Promise<any>;
    /**
     * Récupère les transferts d'une équipe
     */
    getTransfers(teamId: number | string): Promise<any>;
    /**
     * Récupère le palmarès d'une équipe
     */
    getTrophies(teamId: number | string): Promise<any>;
    /**
     * Récupère les équipes par pays
     */
    getByCountry(country: string, limit?: number): Promise<TeamResponse>;
    /**
     * Récupère les équipes par ville
     */
    getByCity(city: string, limit?: number): Promise<TeamResponse>;
    /**
     * Récupère le calendrier des matchs d'une équipe
     */
    getFixtures(teamId: number | string, season?: string | number): Promise<MatchResponse>;
    /**
     * Récupère le classement d'une équipe dans ses compétitions
     */
    getStandings(teamId: number | string, season?: string | number): Promise<any>;
}
