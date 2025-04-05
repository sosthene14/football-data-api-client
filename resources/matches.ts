import { RESOURCE_PATHS } from '../constants';
import { ApiRequest } from '../utils/request';
import { Match, MatchDetailParams, MatchListParams, MatchResponse } from '../types/match.types';

export class MatchesResource {
  private request: ApiRequest;
  private basePath: string;
  
  constructor(request: ApiRequest) {
    this.request = request;
    this.basePath = RESOURCE_PATHS.MATCHES;
  }
  
  /**
   * Récupère la liste des matchs
   */
  public async list(params?: MatchListParams): Promise<MatchResponse> {
    const response = await this.request.get<MatchResponse>(this.basePath, params);
    return response.data;
  }
  
  /**
   * Récupère les détails d'un match spécifique
   */
  public async get(params: MatchDetailParams): Promise<Match> {
    const response = await this.request.get<Match>(`${this.basePath}/${params.id}`);
    return response.data;
  }
  
  /**
   * Récupère les matchs du jour
   */
  public async getToday(): Promise<MatchResponse> {
    const today = new Date().toISOString().split('T')[0];
    return this.list({ dateFrom: today, dateTo: today });
  }
  
  /**
   * Récupère les matchs d'une compétition spécifique
   */
  public async getByCompetition(competitionId: number | string, params?: Omit<MatchListParams, 'competitions'>): Promise<MatchResponse> {
    const response = await this.request.get<MatchResponse>(
      `${RESOURCE_PATHS.COMPETITIONS}/${competitionId}/matches`,
      params
    );
    return response.data;
  }
  
  /**
   * Récupère les têtes d'affiche
   */
  public async getHeadToHead(team1Id: number | string, team2Id: number | string, limit?: number): Promise<MatchResponse> {
    const response = await this.request.get<MatchResponse>(
      `${this.basePath}`,
      { teams: `${team1Id},${team2Id}`, limit }
    );
    return response.data;
  }

  /**
 * Récupère les matchs d'une équipe spécifique
 */
public async getByTeam(teamId: number | string, params?: Omit<MatchListParams, 'teams'>): Promise<MatchResponse> {
    const response = await this.request.get<MatchResponse>(
      `${RESOURCE_PATHS.TEAMS}/${teamId}/matches`,
      params
    );
    return response.data;
  }
  
  /**
   * Récupère les matchs en fonction de leur statut
   */
  public async getByStatus(status: string | string[], params?: Omit<MatchListParams, 'status'>): Promise<MatchResponse> {
    const statusParam = Array.isArray(status) ? status.join(',') : status;
    const response = await this.request.get<MatchResponse>(
      this.basePath,
      { ...params, status: statusParam }
    );
    return response.data;
  }
  
  /**
   * Récupère les matchs à venir
   */
  public async getUpcoming(limit?: number): Promise<MatchResponse> {
    const response = await this.request.get<MatchResponse>(
      this.basePath,
      { status: 'SCHEDULED', limit }
    );
    return response.data;
  }
  
  /**
   * Récupère les matchs terminés récemment
   */
  public async getFinished(limit?: number, dateFrom?: string): Promise<MatchResponse> {
    const defaultDateFrom = dateFrom || new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const response = await this.request.get<MatchResponse>(
      this.basePath,
      { status: 'FINISHED', dateFrom: defaultDateFrom, limit }
    );
    return response.data;
  }
  
  /**
   * Récupère les matchs en direct
   */
  public async getLive(): Promise<MatchResponse> {
    const response = await this.request.get<MatchResponse>(
      this.basePath,
      { status: 'LIVE,IN_PLAY,PAUSED' }
    );
    return response.data;
  }
  
  /**
   * Récupère les statistiques d'un match spécifique
   */
  public async getStatistics(matchId: number | string): Promise<any> {
    const response = await this.request.get<any>(
      `${this.basePath}/${matchId}/statistics`
    );
    return response.data;
  }
  
  /**
   * Récupère les événements détaillés d'un match (buts, cartons, remplacements, etc.)
   */
  public async getEvents(matchId: number | string): Promise<any> {
    const response = await this.request.get<any>(
      `${this.basePath}/${matchId}/events`
    );
    return response.data;
  }
  
  /**
   * Récupère les compositions d'équipe pour un match
   */
  public async getLineups(matchId: number | string): Promise<any> {
    const response = await this.request.get<any>(
      `${this.basePath}/${matchId}/lineups`
    );
    return response.data;
  }
  
  /**
   * Récupère les matchs pour une date spécifique
   */
  public async getByDate(date: string): Promise<MatchResponse> {
    return this.list({ dateFrom: date, dateTo: date });
  }
  
  /**
   * Récupère les matchs pour une période spécifique
   */
  public async getByDateRange(dateFrom: string, dateTo: string, params?: Omit<MatchListParams, 'dateFrom' | 'dateTo'>): Promise<MatchResponse> {
    return this.list({ ...params, dateFrom, dateTo });
  }
}