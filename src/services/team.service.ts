import { Team } from '../models/team';
import { TeamRepository } from '../repositories/team.repository';

const teamRepository = new TeamRepository();

export class TeamService {
  public async getTeam(id: string): Promise<Team | undefined> {
    return teamRepository.get(id);
  }

  public async getAllTeams(): Promise<Team[]> {
    return teamRepository.getAll();
  }

  public async createTeam(team: Team): Promise<Team> {
    return teamRepository.create(team);
  }

  public async updateTeam(id: string, team: Team): Promise<Team | undefined> {
    return teamRepository.update(id, team);
  }

  public async deleteTeam(id: string): Promise<boolean> {
    return teamRepository.delete(id);
  }
}