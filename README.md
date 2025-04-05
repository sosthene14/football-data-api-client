# Football Data API Client

A comprehensive TypeScript client for interacting with football data APIs. This package provides easy access to competitions, matches, teams, and player data with strongly typed responses.

![npm version](https://img.shields.io/npm/v/football-data-api-client)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9%2B-blue)
![License](https://img.shields.io/npm/l/football-data-api-client)

## Features

- 🏆 **Complete football data**: Access competitions, matches, teams, players, and more
- 📊 **Strongly typed**: Written in TypeScript with full type definitions
- 🚀 **Simple API**: Intuitive methods following REST principles
- 🔄 **Flexible parameters**: Customize requests with filtering, sorting, and pagination
- 📱 **Lightweight**: Minimal dependencies for better performance

## Installation

```bash
npm install football-data-api-client
```

or using yarn:

```bash
yarn add football-data-api-client
```

## Getting Started

First, import the client and initialize it with your API key:

```typescript
import { FootballDataClient } from 'football-data-api-client';

const client = new FootballDataClient({
  apiKey: 'YOUR_API_KEY', 
  // optional configuration
  baseUrl: 'https://api.football-data.org/v4', // default
  timeout: 10000 // 10 seconds (default)
});
```

## Usage

The client provides access to four main resources:
- Competitions
- Matches
- Teams
- Players

Each resource provides methods to interact with the respective endpoints.

### Competitions

Access competition data, standings, scorers and more:

```typescript
// Get list of available competitions
const competitions = await client.competitions.list();

// Get a specific competition by ID
const premierLeague = await client.competitions.get({ id: 2021 });

// Get competition standings
const standings = await client.competitions.getStandings(2021);

// Get top scorers from a competition
const scorers = await client.competitions.getScorers(2021, 10); // Limit to top 10

// Get competition matches with filters
const matches = await client.competitions.getMatches(2021, {
  dateFrom: '2023-08-01',
  dateTo: '2023-08-31',
  status: 'FINISHED'
});

// Get teams participating in a competition
const teams = await client.competitions.getTeams(2021);

// Get matchday information
const matchday = await client.competitions.getMatchday(2021, { current: true });
```

### Matches

Retrieve match data, statistics, lineups and more:

```typescript
// Get list of matches with optional filters
const matches = await client.matches.list({
  dateFrom: '2023-09-01',
  dateTo: '2023-09-30',
  competitions: '2021,2014' // Premier League and La Liga
});

// Get details of a specific match
const match = await client.matches.get({ id: 327123 });

// Get today's matches
const todayMatches = await client.matches.getToday();

// Get matches from a specific competition
const competitionMatches = await client.matches.getByCompetition(2021, {
  matchday: 5,
  season: '2023'
});

// Get head-to-head matches between two teams
const headToHead = await client.matches.getHeadToHead(5, 65, 10); // Limit to 10 matches

// Get matches of a specific team
const teamMatches = await client.matches.getByTeam(5, {
  dateFrom: '2023-01-01',
  status: 'FINISHED'
});

// Get matches by status
const liveMatches = await client.matches.getByStatus('LIVE');

// Get upcoming matches
const upcomingMatches = await client.matches.getUpcoming(5); // Next 5 matches

// Get recently finished matches
const finishedMatches = await client.matches.getFinished(10); // Last 10 matches

// Get live matches
const liveMatches = await client.matches.getLive();

// Get match statistics
const matchStats = await client.matches.getStatistics(327123);

// Get match events (goals, cards, substitutions)
const matchEvents = await client.matches.getEvents(327123);

// Get match lineups
const lineups = await client.matches.getLineups(327123);

// Get matches for a specific date
const dateMatches = await client.matches.getByDate('2023-10-05');

// Get matches for a date range
const rangeMatches = await client.matches.getByDateRange('2023-10-01', '2023-10-15');
```

### Teams

Access team data, players, fixtures, statistics and more:

```typescript
// Get list of teams with optional filters
const teams = await client.teams.list({
  name: 'United',
  limit: 10
});

// Get details of a specific team
const team = await client.teams.get({ id: 57 });

// Get team matches
const teamMatches = await client.teams.getMatches(57, {
  status: 'SCHEDULED',
  venue: 'HOME',
  limit: 5
});

// Get team's full squad
const squad = await client.teams.getSquad(57);

// Get teams participating in a competition
const competitionTeams = await client.teams.getByCompetition(2021, '2023');

// Search teams by name
const searchResults = await client.teams.search('Arsenal', 5);

// Get upcoming matches
const upcomingMatches = await client.teams.getUpcomingMatches(57, 5);

// Get recent matches
const recentMatches = await client.teams.getLastMatches(57, 5);

// Get team statistics
const stats = await client.teams.getStatistics(57, {
  competition: 2021,
  season: '2023'
});

// Get team transfers
const transfers = await client.teams.getTransfers(57);

// Get team trophies/honors
const trophies = await client.teams.getTrophies(57);

// Get teams by country
const englishTeams = await client.teams.getByCountry('England', 20);

// Get teams by city
const londonTeams = await client.teams.getByCity('London', 10);

// Get team fixtures (schedule)
const fixtures = await client.teams.getFixtures(57, '2023');

// Get team standings in competitions
const standings = await client.teams.getStandings(57, '2023');
```

### Players

Retrieve player information, statistics, matches and more:

```typescript
// Get player details
const player = await client.players.get({ id: 44 });

// Get player matches
const playerMatches = await client.players.getMatches(44, {
  status: 'FINISHED',
  limit: 10
});

// Search players by name
const searchResults = await client.players.search('Messi', 5);

// Get player statistics
const stats = await client.players.getStatistics(44, {
  competition: 2021,
  season: '2023'
});

// Get players from a specific team
const teamPlayers = await client.players.getByTeam(57);

// Get player transfer history
const transfers = await client.players.getTransfers(44);

// Get player trophies/honors
const trophies = await client.players.getTrophies(44);

// Get players by nationality
const frenchPlayers = await client.players.getByNationality('France', 20);

// Get players by position
const goalkeepers = await client.players.getByPosition('Goalkeeper', 10);

// Get players by age range
const youngPlayers = await client.players.getByAge(18, 23, 15);

// Get player goal statistics
const goalStats = await client.players.getGoalStatistics(44, {
  competition: 2021
});

// Get player contract history
const contracts = await client.players.getContractHistory(44);
```

## API Reference

### Client Configuration

The client constructor accepts the following options:

```typescript
interface ClientOptions {
  apiKey: string;         // Your API key (required)
  baseUrl?: string;       // Default: 'https://api.football-data.org/v4'
  timeout?: number;       // Request timeout in ms (default: 30000)
  headers?: Record<string, string>; // Additional HTTP headers
}
```

### Resource Types

Each resource has corresponding TypeScript interfaces for parameters and responses:

#### Competition Types
```typescript
interface Competition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
  // ...other fields
}

interface CompetitionListParams {
  areas?: string | number[];
  plan?: string;
  limit?: number;
}

interface CompetitionDetailParams {
  id: number | string;
}

interface CompetitionResponse {
  count: number;
  competitions: Competition[];
  // ...metadata
}
```

#### Match Types
```typescript
interface Match {
  id: number;
  utcDate: string;
  status: string;
  matchday: number;
  stage: string;
  group: string | null;
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
  // ...other fields
}

interface MatchListParams {
  competitions?: string | number[];
  dateFrom?: string;
  dateTo?: string;
  status?: string | string[];
  matchday?: number;
  group?: string;
  teams?: string | number[];
  limit?: number;
  // ...other filters
}

interface MatchDetailParams {
  id: number | string;
}

interface MatchResponse {
  count: number;
  matches: Match[];
  // ...metadata
}
```

#### Team Types
```typescript
interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  // ...other fields
}

interface TeamListParams {
  name?: string;
  areas?: string | number[];
  limit?: number;
}

interface TeamDetailParams {
  id: number | string;
}

interface TeamResponse {
  count: number;
  teams: Team[];
  // ...metadata
}
```

#### Player Types
```typescript
interface Player {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  position: string;
  shirtNumber: number;
  // ...other fields
}

interface PlayerDetailParams {
  id: number | string;
}

interface PlayerResponse {
  count: number;
  players: Player[];
  // ...metadata
}
```

## Error Handling

The client throws standardized errors for different types of API failures:

```typescript
try {
  const data = await client.competitions.list();
} catch (error) {
  if (error.status === 401) {
    console.error('Authentication failed. Check your API key.');
  } else if (error.status === 403) {
    console.error('Access denied. Your subscription may not include this resource.');
  } else if (error.status === 429) {
    console.error('Rate limit exceeded. Slow down your requests.');
  } else {
    console.error('API error:', error.message);
  }
}
```

## Rate Limiting

The API enforces rate limits depending on your subscription. The client doesn't implement automatic retry mechanisms, so you may need to handle rate limiting in your application.

## Authentication

This client requires an API key from a football data provider. Sign up at the provider's website to obtain your API key.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

If you encounter any issues or have questions about using this package, please open an issue on GitHub.