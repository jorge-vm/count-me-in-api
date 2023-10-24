import { Request, Response } from 'express';
import { Match } from '../models/match';
import { MatchService } from '../services/match.service';

const matchService = new MatchService();

export class MatchController {
  public async getAllMatches(req: Request, res: Response): Promise<void> {
    const matches = await matchService.getAllMatches();
    res.json(matches);
  }

  public async getMatchById(req: Request, res: Response): Promise<void> {
    const match = await matchService.getMatch(req.params.id);
    if (match) {
      res.json(match);
    } else {
      res.status(404).send('Match not found');
    }
  }

  public async createMatch(req: Request, res: Response): Promise<void> {
    const match: Match = req.body;
    const newMatch = await matchService.createMatch(match);
    res.status(201).json(newMatch);
  }

  public async updateMatchById(req: Request, res: Response): Promise<void> {
    const match: Match = req.body;
    const updatedMatch = await matchService.updateMatch(req.params.id, match);
    if (updatedMatch) {
      res.json(updatedMatch);
    } else {
      res.status(404).send('Match not found');
    }
  }

  public async deleteMatchById(req: Request, res: Response): Promise<void> {
    const result = await matchService.deleteMatch(req.params.id);
    if (result) {
      res.sendStatus(204);
    } else {
      res.status(404).send('Match not found');
    }
  }
}