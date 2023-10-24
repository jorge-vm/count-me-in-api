import { PrismaClient } from '@prisma/client';
import { Match } from '../models/match';
import { Repository } from './repository';

export class MatchRepository implements Repository<Match> {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async get(id: string): Promise<Match | null> {
    return this.prisma.match.findUnique({
      where: { id },
    });
  }

  public async getAll(): Promise<Match[]> {
    return this.prisma.match.findMany();
  }

  public async create(match: Match): Promise<Match> {
    return this.prisma.match.create({
      data: match,
    });
  }

  public async update(id: string, match: Match): Promise<Match | null> {
    return this.prisma.match.update({
      where: { id },
      data: match,
    });
  }

  public async delete(id: string): Promise<boolean> {
    const result = await this.prisma.match.delete({
      where: { id },
    });
    return Boolean(result);
  }
}