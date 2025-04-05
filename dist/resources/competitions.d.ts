import { ApiRequest } from '../utils/request';
import { Competition, CompetitionDetailParams, CompetitionListParams, CompetitionResponse } from '../types/competition.types';
export declare class CompetitionsResource {
    private request;
    private basePath;
    constructor(request: ApiRequest);
    /**
     * Récupère la liste des compétitions
     */
    list(params?: CompetitionListParams): Promise<CompetitionResponse>;
    /**
     * Récupère les détails d'une compétition spécifique
     */
    get(params: CompetitionDetailParams): Promise<Competition>;
    /**
     * Récupère le classement d'une compétition
     */
    getStandings(competitionId: number | string): Promise<any>;
    /**
     * Récupère les buteurs d'une compétition
     */
    getScorers(competitionId: number | string, limit?: number): Promise<any>;
}
