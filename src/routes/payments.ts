import { Router } from 'express';
import { prisma } from '../index.js';
const r = Router();
r.get('/', async (_req, res) => res.json(await prisma.payment.findMany({ orderBy: { timestamp: 'desc' } })));
r.post('/', async (req, res) => {
  const { userId, method='cash', amount, currency='ETB', staffId, status='paid' } = req.body;
  const p = await prisma.payment.create({ data: { userId, method, amount, currency, staffId, status } });
  res.status(201).json(p);
});
r.get('/invoices', async (_req, res) => res.json(await prisma.invoice.findMany({ orderBy: { dueAt: 'desc' } })));
r.post('/invoices', async (req, res) => {
  const { userId, dueAt, amount, reason, status='pending' } = req.body;
  const inv = await prisma.invoice.create({ data: { userId, dueAt: new Date(dueAt), amount, reason, status } });
  res.status(201).json(inv);
});
export default r;