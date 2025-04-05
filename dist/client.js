"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootballDataClient = void 0;
const request_1 = require("./utils/request");
const competitions_1 = require("./resources/competitions");
const teams_1 = require("./resources/teams");
const matches_1 = require("./resources/matches");
const players_1 = require("./resources/players");
const constants_1 = require("./constants");
class FootballDataClient {
    constructor(apiKey, options = {}) {
        const apiOptions = {
            baseUrl: options.baseUrl || constants_1.API_BASE_URL,
            apiKey,
            headers: options.headers,
            timeout: options.timeout
        };
        this.request = new request_1.ApiRequest(apiOptions);
        // Initialisation des ressources
        this.competitions = new competitions_1.CompetitionsResource(this.request);
        this.teams = new teams_1.TeamsResource(this.request);
        this.matches = new matches_1.MatchesResource(this.request);
        this.players = new players_1.PlayersResource(this.request);
    }
}
exports.FootballDataClient = FootballDataClient;
//# sourceMappingURL=client.js.map