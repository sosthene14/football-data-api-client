import { RESOURCE_PATHS } from '../constants';
import { ApiRequest } from '../utils/request';
import { Player, PlayerDetailParams, PlayerListParams, PlayerResponse } from '../types/player.types';

export class PlayersResource {
  private request: ApiRequest;
  private basePath: string;
  
  constructor(request: ApiRequest) {
    this.request = request;
    this.basePath = RESOURCE_PATHS.PLAYERS;
  }
  
  /**
   * Récupère les détails d'un joueur spécifique
   */
  public async get(params: PlayerDetailParams): Promise<Player> {
    const response = await this.request.get<Player>(`${this.basePath}/${params.id}`);
    return response.data;
  }
  
  /**
   * Récupère les matchs d'un joueur
   */
  public async getMatches(playerId: number | string, params?: {
    dateFrom?: string;
    dateTo?: string;
    status?: string | string[];
    competitions?: string | number[];
    limit?: number;
  }): Promise<any> {
    const response = await this.request.get<any>(
      `${this.basePath}/${playerId}/matches`,
      params
    );
    return response.data;
  }
  
  /**
   * Recherche de joueurs par nom
   */
  public async search(name: string, limit?: number): Promise<PlayerResponse> {
    const response = await this.request.get<PlayerResponse>(
      `${this.basePath}`,
      { name, limit }
    );
    return response.data;
  }

  /**
 * Récupère les statistiques d'un joueur
 */
public async getStatistics(playerId: number | string, params?: {
    competition?: string | number;
    season?: string | number;
  }): Promise<any> {
    const response = await this.request.get<any>(
      `${this.basePath}/${playerId}/statistics`,
      params
    );
    return response.data;
  }
  
  /**
   * Récupère les joueurs d'une équipe spécifique
   */
  public async getByTeam(teamId: number | string): Promise<PlayerResponse> {
    const response = await this.request.get<PlayerResponse>(
      `${RESOURCE_PATHS.TEAMS}/${teamId}/players`
    );
    return response.data;
  }
  
  /**
   * Récupère les transferts d'un joueur
   */
  public async getTransfers(playerId: number | string): Promise<any> {
    const response = await this.request.get<any>(
      `${this.basePath}/${playerId}/transfers`
    );
    return response.data;
  }
  
  /**
   * Récupère les trophées d'un joueur
   */
  public async getTrophies(playerId: number | string): Promise<any> {
    const response = await this.request.get<any>(
      `${this.basePath}/${playerId}/trophies`
    );
    return response.data;
  }
  
  /**
   * Récupère les joueurs par nationalité
   */
  public async getByNationality(nationality: string, limit?: number): Promise<PlayerResponse> {
    const response = await this.request.get<PlayerResponse>(
      `${this.basePath}`,
      { nationality, limit }
    );
    return response.data;
  }
  
  /**
   * Récupère les joueurs par position
   */
  public async getByPosition(position: string, limit?: number): Promise<PlayerResponse> {
    const response = await this.request.get<PlayerResponse>(
      `${this.basePath}`,
      { position, limit }
    );
    return response.data;
  }
  
  /**
   * Récupère les joueurs par âge
   */
  public async getByAge(ageFrom: number, ageTo: number, limit?: number): Promise<PlayerResponse> {
    const response = await this.request.get<PlayerResponse>(
      `${this.basePath}`,
      { ageFrom, ageTo, limit }
    );
    return response.data;
  }
  
  /**
   * Récupère les statistiques de but d'un joueur
   */
  public async getGoalStatistics(playerId: number | string, params?: {
    competition?: string | number;
    season?: string | number;
  }): Promise<any> {
    const response = await this.request.get<any>(
      `${this.basePath}/${playerId}/goals`,
      params
    );
    return response.data;
  }
  
  /**
   * Récupère l'historique de contrats d'un joueur
   */
  public async getContractHistory(playerId: number | string): Promise<any> {
    const response = await this.request.get<any>(
      `${this.basePath}/${playerId}/contracts`
    );
    return response.data;
  }
}