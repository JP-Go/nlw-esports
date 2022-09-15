import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes';
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string';

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient({ log: ['query'] });

app.get('/games', async (_request, response) => {
  const games = await prisma.game.findMany({
    include: { _count: { select: { ads: true } } },
  });
  return response.status(200).json(games);
});

app.post('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id;
  const body = request.body;

  const ad = await prisma.ad.create({
    data: {
      name: body.name,
      useVoiceChannel: body.useVoiceChannel,
      hourStart: convertHourStringToMinutes(body.hourStart),
      hourEnd: convertHourStringToMinutes(body.hourEnd),
      weekDays: body.weekDays.join(','),
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      gameId,
    },
  });

  return response.json(ad);
});

app.get('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id;
  const ads = await prisma.ad.findMany({
    where: { gameId },
    select: {
      id: true,
      name: true,
      useVoiceChannel: true,
      hourStart: true,
      hourEnd: true,
      weekDays: true,
      yearsPlaying: true,
    },
    orderBy: { createdAt: 'desc' },
  });
  response.status(200).json(
    ads.map((ad) => {
      return {
        ...ad,
        hourStart: convertMinutesToHourString(ad.hourStart),
        hourEnd: convertMinutesToHourString(ad.hourEnd),
        weekDays: ad.weekDays.split(','),
      };
    })
  );
});

app.get('/ads/:id/discord', async (request, response) => {
  const adId = request.params.id;
  const { discord } = await prisma.ad.findUniqueOrThrow({
    where: { id: adId },
    select: { discord: true },
  });
  response.status(200).json({ discord });
});

app.listen(3333, () => {
  console.log('Watching port 3333');
});
