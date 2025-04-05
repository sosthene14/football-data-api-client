import { ApiOptions } from './types/api.types';
import { ApiRequest } from './utils/request';
import { CompetitionsResource } from './resources/competitions';
import { TeamsResource } from './resources/teams';
import { MatchesResource } from './resources/matches';
import { PlayersResource } from './resources/players';
import { API_BASE_URL } from './constants';

export class FootballDataClient {
  private request: ApiRequest;
  
  public competitions: CompetitionsResource;
  public teams: TeamsResource;
  public matches: MatchesResource;
  public players: PlayersResource;
  
  constructor(apiKey: string, options: Partial<ApiOptions> = {}) {
    const apiOptions: ApiOptions = {
      baseUrl: options.baseUrl || API_BASE_URL,
      apiKey,
      headers: options.headers,
      timeout: options.timeout
    };
    
    this.request = new ApiRequest(apiOptions);
    
    // Initialisation des ressources
    this.competitions = new CompetitionsResource(this.request);
    this.teams = new TeamsResource(this.request);
    this.matches = new MatchesResource(this.request);
    this.players = new PlayersResource(this.request);
  }
}