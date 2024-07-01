import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config/config.js';

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Authorization header is missing or malformed' });
    }

    try {
        const decodedToken = jwt.verify(token, SECRET_KEY);
        req.user = decodedToken; 
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json({ message: 'Invalid token' });
    }
};

export default verifyToken;