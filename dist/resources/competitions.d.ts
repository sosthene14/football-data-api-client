import { ApiRequest } from '../utils/request';
import { Competition, CompetitionDetailParams, CompetitionListParams, CompetitionResponse } from '../types/competition.types';
export declare class CompetitionsResource {
    private request;
    private basePath;
    constructor(request: ApiRequest);
    /**
   * Retrieves the list of competitions
   */
    list(params?: CompetitionListParams): Promise<CompetitionResponse>;
    /**
   * Retrieves details of a specific competition
   */
    get(params: CompetitionDetailParams): Promise<Competition>;
    /**
  * Retrieves the ranking of a competition
  */
    getStandings(competitionId: number | string): Promise<any>;
    /**
     * Récupère les buteurs d'une compétition
     */
    getScorers(competitionId: number | string, limit?: number): Promise<any>;
    /**
   * Récupère les matchs d'une compétition spécifique
   */
    getMatches(competitionId: number | string, params?: {
        dateFrom?: string;
        dateTo?: string;
        stage?: string;
        status?: string;
        matchday?: number;
        group?: string;
        season?: string;
    }): Promise<any>;
    /**
     * Récupère les équipes participant à une compétition spécifique
     */
    getTeams(competitionId: number | string, season?: string): Promise<any>;
    /**
     * Récupère le calendrier des journées d'une compétition
     */
    getMatchday(competitionId: number | string, params?: {
        season?: string;
        current?: boolean;
    }): Promise<any>;
}
