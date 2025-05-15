// src/index.js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';            // small security hardening
import authRoutes from './routes/auth.js';

const app = express();

// GLOBAL MIDDLEWARE
app.use(helmet());
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/auth', authRoutes);           // POST /auth/signup, POST /auth/login

app.get('/', (_req, res) => {
  res.json({ status: 'ok' });
});

// FALLBACK 404
app.use((_req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// ERROR HANDLER
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

// START SERVER
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
