import { PaginationParams } from './api.types';
export interface Player {
    id: number;
    name: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    nationality?: string;
    position?: PlayerPosition;
    shirtNumber?: number;
    lastUpdated: string;
    currentTeam?: {
        id: number;
        name: string;
        contract?: {
            start?: string;
            until?: string;
        };
    };
}
export type PlayerPosition = 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Attacker' | 'Coach';
export interface PlayerListParams extends PaginationParams {
    teams?: string | number[];
}
export interface PlayerResponse {
    count: number;
    players: Player[];
}
export interface PlayerDetailParams {
    id: number | string;
}
