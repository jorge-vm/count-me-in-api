import { Request, Response } from 'express';
import { Team } from '../models/team';
import { TeamService } from '../services/team.service';

const teamService = new TeamService();

export class TeamController {
  public async getAllTeams(req: Request, res: Response): Promise<void> {
    const teams = await teamService.getAllTeams();
    res.json(teams);
  }

  public async getTeamById(req: Request, res: Response): Promise<void> {
    const team = await teamService.getTeam(req.params.id);
    if (team) {
      res.json(team);
    } else {
      res.status(404).send('Team not found');
    }
  }

  public async createTeam(req: Request, res: Response): Promise<void> {
    const team: Team = req.body;
    const newTeam = await teamService.createTeam(team);
    res.status(201).json(newTeam);
  }

  public async updateTeamById(req: Request, res: Response): Promise<void> {
    const team: Team = req.body;
    const updatedTeam = await teamService.updateTeam(req.params.id, team);
    if (updatedTeam) {
      res.json(updatedTeam);
    } else {
      res.status(404).send('Team not found');
    }
  }

  public async deleteTeamById(req: Request, res: Response): Promise<void> {
    const result = await teamService.deleteTeam(req.params.id);
    if (result) {
      res.sendStatus(204);
    } else {
      res.status(404).send('Team not found');
    }
  }
}