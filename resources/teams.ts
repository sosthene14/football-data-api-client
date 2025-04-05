import { ApiRequest } from '../utils/request';
import { Team, TeamDetailParams, TeamListParams, TeamResponse } from '../types/team.types';
import { MatchResponse } from '../types/match.types';
import { RESOURCE_PATHS } from '../constants';

export class TeamsResource {
  private request: ApiRequest;
  private basePath: string;
  
  constructor(request: ApiRequest) {
    this.request = request;
    this.basePath = RESOURCE_PATHS.TEAMS;
  }
  
  /**
   * Récupère la liste des équipes
   */
  public async list(params?: TeamListParams): Promise<TeamResponse> {
    const response = await this.request.get<TeamResponse>(this.basePath, params);
    return response.data;
  }
  
  /**
   * Récupère les détails d'une équipe spécifique
   */
  public async get(params: TeamDetailParams): Promise<Team> {
    const response = await this.request.get<Team>(`${this.basePath}/${params.id}`);
    return response.data;
  }
  
  /**
   * Récupère les matchs d'une équipe
   */
  public async getMatches(teamId: number | string, params?: {
    dateFrom?: string;
    dateTo?: string;
    status?: string | string[];
    venue?: 'HOME' | 'AWAY';
    limit?: number;
  }): Promise<MatchResponse> {
    const response = await this.request.get<MatchResponse>(
      `${this.basePath}/${teamId}/matches`,
      params
    );
    return response.data;
  }
  
  /**
   * Récupère l'effectif complet d'une équipe
   */
  public async getSquad(teamId: number | string): Promise<Team> {
    const response = await this.request.get<Team>(`${this.basePath}/${teamId}`);
    return response.data;
  }

  /**
 * Récupère les équipes d'une compétition spécifique
 */
public async getByCompetition(competitionId: number | string, season?: string | number): Promise<TeamResponse> {
    const response = await this.request.get<TeamResponse>(
      `${RESOURCE_PATHS.COMPETITIONS}/${competitionId}/teams`,
      { season }
    );
    return response.data;
  }
  
  /**
   * Recherche d'équipes par nom
   */
  public async search(name: string, limit?: number): Promise<TeamResponse> {
    const response = await this.request.get<TeamResponse>(
      this.basePath,
      { name, limit }
    );
    return response.data;
  }
  
  /**
   * Récupère les matchs à venir d'une équipe
   */
  public async getUpcomingMatches(teamId: number | string, limit?: number): Promise<MatchResponse> {
    const response = await this.request.get<MatchResponse>(
      `${this.basePath}/${teamId}/matches`,
      { status: 'SCHEDULED', limit }
    );
    return response.data;
  }
  
  /**
   * Récupère les derniers matchs d'une équipe
   */
  public async getLastMatches(teamId: number | string, limit?: number): Promise<MatchResponse> {
    const response = await this.request.get<MatchResponse>(
      `${this.basePath}/${teamId}/matches`,
      { status: 'FINISHED', limit, orderBy: 'date', order: 'desc' }
    );
    return response.data;
  }
  
  /**
   * Récupère les statistiques d'une équipe
   */
  public async getStatistics(teamId: number | string, params?: {
    competition?: string | number;
    season?: string | number;
  }): Promise<any> {
    const response = await this.request.get<any>(
      `${this.basePath}/${teamId}/statistics`,
      params
    );
    return response.data;
  }
  
  /**
   * Récupère les transferts d'une équipe
   */
  public async getTransfers(teamId: number | string): Promise<any> {
    const response = await this.request.get<any>(
      `${this.basePath}/${teamId}/transfers`
    );
    return response.data;
  }
  
  /**
   * Récupère le palmarès d'une équipe
   */
  public async getTrophies(teamId: number | string): Promise<any> {
    const response = await this.request.get<any>(
      `${this.basePath}/${teamId}/trophies`
    );
    return response.data;
  }
  
  /**
   * Récupère les équipes par pays
   */
  public async getByCountry(country: string, limit?: number): Promise<TeamResponse> {
    const response = await this.request.get<TeamResponse>(
      this.basePath,
      { country, limit }
    );
    return response.data;
  }
  
  /**
   * Récupère les équipes par ville
   */
  public async getByCity(city: string, limit?: number): Promise<TeamResponse> {
    const response = await this.request.get<TeamResponse>(
      this.basePath,
      { city, limit }
    );
    return response.data;
  }
  
  /**
   * Récupère le calendrier des matchs d'une équipe
   */
  public async getFixtures(teamId: number | string, season?: string | number): Promise<MatchResponse> {
    const response = await this.request.get<MatchResponse>(
      `${this.basePath}/${teamId}/fixtures`,
      { season }
    );
    return response.data;
  }
  
  /**
   * Récupère le classement d'une équipe dans ses compétitions
   */
  public async getStandings(teamId: number | string, season?: string | number): Promise<any> {
    const response = await this.request.get<any>(
      `${this.basePath}/${teamId}/standings`,
      { season }
    );
    return response.data;
  }
}