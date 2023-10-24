import { PrismaClient } from '@prisma/client';
import { Team } from '../models/team';
import { Repository } from './repository';


export class TeamRepository implements Repository<Team> {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async get(id: string): Promise<Team | null> {
    return this.prisma.team.findUnique({
      where: { id },
      include: { players: true, matches: true },
    });
  }

  public async getAll(): Promise<Team[]> {
    return this.prisma.team.findMany({
      include: { players: true, matches: true },
    });
  }

  public async create(team: Team): Promise<Team> {
    return this.prisma.team.create({
      data: team,
      include: { players: true, matches: true },
    });
  }

  public async update(id: string, team: Team): Promise<Team | null> {
    return this.prisma.team.update({
      where: { id },
      data: team,
      include: { players: true, matches: true },
    });
  }

  public async delete(id: string): Promise<boolean> {
    const result = await this.prisma.team.delete({
      where: { id },
    });
    return Boolean(result);
  }
}