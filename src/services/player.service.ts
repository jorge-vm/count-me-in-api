import { Player } from '../models/player';
import { PlayerRepository } from '../repositories/player.repository';

const playerRepository = new PlayerRepository();

export class PlayerService {
  public async getPlayer(id: string): Promise<Player | undefined> {
    return playerRepository.get(id);
  }

  public async getAllPlayers(): Promise<Player[]> {
    return playerRepository.getAll();
  }

  public async createPlayer(player: Player): Promise<Player> {
    return playerRepository.create(player);
  }

  public async updatePlayer(id: string, player: Player): Promise<Player | undefined> {
    return playerRepository.update(id, player);
  }

  public async deletePlayer(id: string): Promise<boolean> {
    return playerRepository.delete(id);
  }
}