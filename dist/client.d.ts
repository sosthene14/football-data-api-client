import { ApiOptions } from './types/api.types';
import { CompetitionsResource } from './resources/competitions';
import { TeamsResource } from './resources/teams';
import { MatchesResource } from './resources/matches';
import { PlayersResource } from './resources/players';
export declare class FootballDataClient {
    private request;
    competitions: CompetitionsResource;
    teams: TeamsResource;
    matches: MatchesResource;
    players: PlayersResource;
    constructor(apiKey: string, options?: Partial<ApiOptions>);
}
