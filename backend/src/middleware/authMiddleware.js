import jwt from 'jsonwebtoken';

/**
 * Middleware to protect routes and attach user info to req.user
 */
export function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing or malformed Authorization header' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // Attach user info for downstream handlers
    req.user = { id: payload.id, email: payload.email };
    next();
  } catch (err) {
    console.error('JWT verification failed', err);
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}
