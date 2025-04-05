import { PaginationParams } from './api.types';

export interface Competition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
  currentSeason?: Season;
  seasons?: Season[];
  area?: Area;
}

export interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday?: number;
  winner?: any;
}

export interface Area {
  id: number;
  name: string;
  code: string;
  flag?: string;
}

export interface CompetitionListParams extends PaginationParams {
  areas?: string | number[];
}

export interface CompetitionResponse {
  count: number;
  competitions: Competition[];
}

export interface CompetitionDetailParams {
  id: number | string;
}