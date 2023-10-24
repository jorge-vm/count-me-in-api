import { PrismaClient, Match, Team, Player } from '@prisma/client';
import { Repository } from './repository';

export class PlayerRepository implements Repository<Player> {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async get(id: string): Promise<Player | null> {
    return this.prisma.player.findUnique({
      where: { id },
      include: { matches: true },
    });
  }

  public async getAll(): Promise<Player[]> {
    return this.prisma.player.findMany({
      include: { matches: true },
    });
  }

  public async create(player: Player): Promise<Player> {
    return this.prisma.player.create({
      data: player,
      include: { matches: true },
    });
  }

  public async update(id: string, player: Player): Promise<Player | null> {
    return this.prisma.player.update({
      where: { id },
      data: player,
      include: { matches: true },
    });
  }

  public async delete(id: string): Promise<boolean> {
    const result = await this.prisma.player.delete({
      where: { id },
    });
    return Boolean(result);
  }
}