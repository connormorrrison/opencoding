// src/routes/auth.js
import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const router   = Router();
const prisma   = new PrismaClient();
const SALT     = 10;

/* ------------  SIGN-UP  ---------------- */
router.post(
  '/signup',
  [
    body('firstName').trim().notEmpty().withMessage('First name is required'),

    body('lastName').trim().notEmpty().withMessage('Last name is required'),

    body('email')
      .trim()
      .isEmail().withMessage('Valid email is required')
      .normalizeEmail(),

    // bail() stops running further validators if one already failed
    body('password')
      .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
      .bail(),

    body('confirmPassword')
      .notEmpty().withMessage('Confirm password is required')
      .bail()
      .custom((val, { req }) => {
        if (val !== req.body.password) throw new Error('Passwords must match');
        return true;
      }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password } = req.body;

    try {
      // Unique-email guard
      const existing = await prisma.user.findUnique({ where: { email } });
      if (existing) {
        return res.status(409).json({ message: 'Email already in use' });
      }

      const hash  = await bcrypt.hash(password, SALT);
      const user  = await prisma.user.create({
        data: { firstName, lastName, email, password: hash },
      });

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );

      return res.status(201).json({ token });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
  }
);

export default router;
