import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

router.post(
  '/signup',
  [
    body('firstName').trim().notEmpty(),
    body('lastName').trim().notEmpty(),
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 8 }),
    body('confirmPassword').custom((val, { req }) => val === req.body.password),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password } = req.body;

    try {
      const exists = await prisma.user.findUnique({ where: { email } });
      if (exists) return res.status(409).json({ message: 'Email already in use' });

      const hash = await bcrypt.hash(password, SALT_ROUNDS);

      const user = await prisma.user.create({
        data: { firstName, lastName, email, password: hash },
      });

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });

      res.status(201).json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

export default router;
