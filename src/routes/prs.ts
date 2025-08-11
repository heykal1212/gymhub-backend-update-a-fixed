import { Router } from 'express';
import { prisma } from '../index.js';
const r = Router();
r.get('/', async (_req, res) => res.json(await prisma.pR.findMany({ orderBy: { date: 'desc' } })));
r.post('/', async (req, res) => {
  const { userId, exerciseId, value, unit, date } = req.body;
  const rec = await prisma.pR.create({ data: { userId, exerciseId, value, unit, date: date? new Date(date): new Date() } });
  res.status(201).json(rec);
});
export default r;