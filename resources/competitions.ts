import { RESOURCE_PATHS } from '../constants';
import { ApiRequest } from '../utils/request';
import { Competition, CompetitionDetailParams, CompetitionListParams, CompetitionResponse } from '../types/competition.types';

export class CompetitionsResource {
  private request: ApiRequest;
  private basePath: string;
  
  constructor(request: ApiRequest) {
    this.request = request;
    this.basePath = RESOURCE_PATHS.COMPETITIONS;
  }
  
 /**
* Retrieves the list of competitions
*/
  public async list(params?: CompetitionListParams): Promise<CompetitionResponse> {
    const response = await this.request.get<CompetitionResponse>(this.basePath, params);
    return response.data;
  }
  
 /**
* Retrieves details of a specific competition
*/
  public async get(params: CompetitionDetailParams): Promise<Competition> {
    const response = await this.request.get<Competition>(`${this.basePath}/${params.id}`);
    return response.data;
  }
  
  /**
* Retrieves the ranking of a competition
*/
  public async getStandings(competitionId: number | string): Promise<any> {
    const response = await this.request.get<any>(`${this.basePath}/${competitionId}/standings`);
    return response.data;
  }
  
  /**
   * Récupère les buteurs d'une compétition
   */
  public async getScorers(competitionId: number | string, limit?: number): Promise<any> {
    const response = await this.request.get<any>(
      `${this.basePath}/${competitionId}/scorers`, 
      { limit }
    );
    return response.data;
  }

  /**
 * Récupère les matchs d'une compétition spécifique
 */
public async getMatches(competitionId: number | string, params?: {
    dateFrom?: string;
    dateTo?: string;
    stage?: string;
    status?: string;
    matchday?: number;
    group?: string;
    season?: string;
  }): Promise<any> {
    const response = await this.request.get<any>(`${this.basePath}/${competitionId}/matches`, params);
    return response.data;
  }
  
  /**
   * Récupère les équipes participant à une compétition spécifique
   */
  public async getTeams(competitionId: number | string, season?: string): Promise<any> {
    const response = await this.request.get<any>(`${this.basePath}/${competitionId}/teams`, { season });
    return response.data;
  }
  
  /**
   * Récupère le calendrier des journées d'une compétition
   */
  public async getMatchday(competitionId: number | string, params?: {
    season?: string;
    current?: boolean;
  }): Promise<any> {
    const response = await this.request.get<any>(`${this.basePath}/${competitionId}/matchday`, params);
    return response.data;
  }
}