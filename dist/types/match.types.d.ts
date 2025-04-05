import { PaginationParams } from './api.types';
import { Area, Competition, Season } from './competition.types';
export interface Match {
    id: number;
    area: Area;
    competition: Competition;
    season: Season;
    utcDate: string;
    status: MatchStatus;
    matchday?: number;
    stage?: string;
    group?: string;
    lastUpdated: string;
    homeTeam: TeamInMatch;
    awayTeam: TeamInMatch;
    score: Score;
    referees?: Referee[];
    venue?: string;
}
export interface TeamInMatch {
    id: number;
    name: string;
    shortName?: string;
    tla?: string;
    crest?: string;
    coach?: {
        id?: number;
        name?: string;
        nationality?: string;
    };
}
export interface Score {
    winner?: 'HOME_TEAM' | 'AWAY_TEAM' | 'DRAW' | null;
    duration?: 'REGULAR' | 'EXTRA_TIME' | 'PENALTIES';
    fullTime: ScoreDetail;
    halfTime: ScoreDetail;
    extraTime?: ScoreDetail;
    penalties?: ScoreDetail;
}
export interface ScoreDetail {
    home?: number | null;
    away?: number | null;
}
export interface Referee {
    id: number;
    name: string;
    type: string;
    nationality?: string;
}
export type MatchStatus = 'SCHEDULED' | 'TIMED' | 'IN_PLAY' | 'PAUSED' | 'FINISHED' | 'SUSPENDED' | 'POSTPONED' | 'CANCELLED' | 'AWARDED';
export interface MatchListParams extends PaginationParams {
    competitions?: string | number[];
    dateFrom?: string;
    dateTo?: string;
    status?: MatchStatus | MatchStatus[];
    stage?: string;
    matchday?: number;
    group?: string;
    season?: string | number;
}
export interface MatchResponse {
    count: number;
    matches: Match[];
    filters: Record<string, any>;
}
export interface MatchDetailParams {
    id: number | string;
}
