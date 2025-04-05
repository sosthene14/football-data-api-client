import { PaginationParams } from './api.types';
import { Area } from './competition.types';
import { Player } from './player.types';
export interface Team {
    id: number;
    name: string;
    shortName: string;
    tla?: string;
    crest: string;
    address?: string;
    website?: string;
    founded?: number;
    clubColors?: string;
    venue?: string;
    area?: Area;
    coach?: Coach;
    squad?: Player[];
    runningCompetitions?: RunningCompetition[];
    lastUpdated: string;
}
export interface Coach {
    id?: number;
    name?: string;
    dateOfBirth?: string;
    nationality?: string;
    contract?: {
        start?: string;
        until?: string;
    };
}
export interface RunningCompetition {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
}
export interface TeamListParams extends PaginationParams {
    areas?: string | number[];
    competitions?: string | number[];
}
export interface TeamResponse {
    count: number;
    teams: Team[];
}
export interface TeamDetailParams {
    id: number | string;
}
