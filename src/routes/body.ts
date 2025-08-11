import { Router } from 'express';
import { prisma } from '../index.js';
const r = Router();
r.get('/', async (_req, res) => res.json(await prisma.bodyMetric.findMany({ orderBy: { date: 'desc' } })));
r.post('/', async (req, res) => {
  const { userId, date, weightKg, bodyFatPct, chestCm, waistCm, hipCm, neckCm, bicepCm, thighCm } = req.body;
  const m = await prisma.bodyMetric.create({ data: { userId, date: date? new Date(date): new Date(), weightKg, bodyFatPct, chestCm, waistCm, hipCm, neckCm, bicepCm, thighCm } });
  res.status(201).json(m);
});
export default r;