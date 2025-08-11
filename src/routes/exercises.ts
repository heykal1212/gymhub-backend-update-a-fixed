import { Router } from 'express';
import { prisma } from '../index.js';
const r = Router();
r.get('/', async (req, res) => {
  const { muscleGroup, equipment, skillLevel } = req.query as any;
  let where:any = {};
  if (muscleGroup) where.muscleGroup = muscleGroup;
  if (equipment) where.equipment = equipment;
  if (skillLevel) where.skillLevel = skillLevel;
  res.json(await prisma.exercise.findMany({ where, orderBy: { name: 'asc' } }));
});
r.post('/', async (req,res)=>{
  const { name, muscleGroup, equipment, skillLevel, mediaUrl, tags=[] } = req.body;
  const ex = await prisma.exercise.create({ data: { name, muscleGroup, equipment, skillLevel, mediaUrl, tags } });
  res.status(201).json(ex);
});
export default r;