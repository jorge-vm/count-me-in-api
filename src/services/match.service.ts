import { Match } from '../models/match';
import { MatchRepository } from '../repositories/match.repository';

const matchRepository = new MatchRepository();

export class MatchService {
  public async getMatch(id: string): Promise<Match | undefined> {
    return matchRepository.get(id);
  }

  public async getAllMatches(): Promise<Match[]> {
    return matchRepository.getAll();
  }

  public async createMatch(match: Match): Promise<Match> {
    return matchRepository.create(match);
  }

  public async updateMatch(id: string, match: Match): Promise<Match | undefined> {
    return matchRepository.update(id, match);
  }

  public async deleteMatch(id: string): Promise<boolean> {
    return matchRepository.delete(id);
  }
}