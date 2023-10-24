import { Request, Response } from 'express';
import { Player } from '../models/player';
import { PlayerService } from '../services/player.service';

const playerService = new PlayerService();

export class PlayerController {
  public async getAllPlayers(req: Request, res: Response): Promise<void> {
    const players = await playerService.getAllPlayers();
    res.json(players);
  }

  public async getPlayerById(req: Request, res: Response): Promise<void> {
    const player = await playerService.getPlayer(req.params.id);
    if (player) {
      res.json(player);
    } else {
      res.status(404).send('Player not found');
    }
  }

  public async createPlayer(req: Request, res: Response): Promise<void> {
    const player: Player = req.body;
    const newPlayer = await playerService.createPlayer(player);
    res.status(201).json(newPlayer);
  }

  public async updatePlayerById(req: Request, res: Response): Promise<void> {
    const player: Player = req.body;
    const updatedPlayer = await playerService.updatePlayer(req.params.id, player);
    if (updatedPlayer) {
      res.json(updatedPlayer);
    } else {
      res.status(404).send('Player not found');
    }
  }

  public async deletePlayerById(req: Request, res: Response): Promise<void> {
    const result = await playerService.deletePlayer(req.params.id);
    if (result) {
      res.sendStatus(204);
    } else {
      res.status(404).send('Player not found');
    }
  }
}