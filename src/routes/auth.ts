import { Router } from 'express';
import jwt from 'jsonwebtoken';
const r = Router();
r.post('/dev-login', (req, res) => {
  const { email, role='admin', name='Admin' } = req.body || {};
  const token = jwt.sign({ email, role, name }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
  res.json({ token });
});
export default r;