import {TeamogramClient} from '@nx-prisma/prisma-clients'
import {UserNameGivenByKasper} from '@nx-prisma/prisma-clients/teamogram'


export class TeamogramDb {
  constructor(
    private prisma: TeamogramClient = new TeamogramClient()
  ) {
  }

  async getGivenNames(prismaOptions?: Parameters<typeof this.prisma.userNameGivenByKasper.findMany>[0]): Promise<UserNameGivenByKasper[]> {
    await this.prisma.$connect()
    const users = await this.prisma.userNameGivenByKasper.findMany(prismaOptions)
    await this.prisma.$disconnect()
    return users
  }

  async getGivenNameByTelegramUserId(id: number): Promise<UserNameGivenByKasper> {
    await this.prisma.$connect()
    const user = await this.prisma.userNameGivenByKasper.findUnique({where: {id}})
    await this.prisma.$disconnect()
    return user
  }

  addScore = async (data: Parameters<typeof this.prisma.score.create>[0]['data']) => {
    return this.prisma.score.create({data})
  };

  getScoreTest = async () => {
    return this.prisma.score.findMany({where: {telegramChatId: 100}})
  }

  getScoreStatistics = async (telegramChatId: number) => {
    return this.prisma.score.groupBy({
      where: {telegramChatId},
      by: ['targetTelegramUserId'],
      orderBy: [{
        _sum: {
          value: 'desc'
        }
      }],
      _sum: {
        value: true
      },
      _count: {
        value: true
      },
    })
  }


  getUsernamesUserData = async (usersIds: number[]) => {
    return this.prisma.userNameGivenByKasper.findMany({where: {
      id: {
        in: usersIds
      }
      }})
  }

  getGivenScoreStatistics = async (telegramChatId: number) => {
    return this.prisma.score.groupBy({
      where: {telegramChatId},
      by: ['givingTelegramUserId'],
      orderBy: [{
        _sum: {
          value: 'desc'
        }
      }],
      _sum: {
        value: true
      },
      _count: {
        value: true
      },
    })
  }


}
