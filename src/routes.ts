import { Router } from 'express';
import { MatchController } from './controllers/match.controller';
import { TeamController } from './controllers/team.controller';
import { PlayerController } from './controllers/player.controller';

const matchController = new MatchController();
const teamController = new TeamController();
const playerController = new PlayerController();

export function setRoutes(app: Router): void {
  // Matches
  app.get('/matches/:id', matchController.getMatch.bind(matchController));
  app.post('/matches', matchController.createMatch.bind(matchController));
  app.put('/matches/:id', matchController.updateMatch.bind(matchController));
  app.delete('/matches/:id', matchController.deleteMatch.bind(matchController));

  // Teams
  app.get('/teams', teamController.getAllTeams.bind(teamController));
  app.get('/teams/:id', teamController.getTeamById.bind(teamController));
  app.post('/teams', teamController.createTeam.bind(teamController));
  app.put('/teams/:id', teamController.updateTeamById.bind(teamController));
  app.delete('/teams/:id', teamController.deleteTeamById.bind(teamController));

  // Players
  app.get('/players', playerController.getAllPlayers.bind(playerController));
  app.get('/players/:id', playerController.getPlayerById.bind(playerController));
  app.post('/players', playerController.createPlayer.bind(playerController));
  app.put('/players/:id', playerController.updatePlayerById.bind(playerController));
  app.delete('/players/:id', playerController.deletePlayerById.bind(playerController));
}