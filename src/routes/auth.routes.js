import { Router } from 'express';
import { info, login, register, updatePerfil } from '../controllers/auth.controllers.js';
import upload from '../middlewares/multer.js';
import verifyToken from '../middlewares/jwt.middlewares.js'; // Importa el middleware JWT

const router = Router();

router.get('/usuario', verifyToken, info); // Ejemplo de protección de ruta con JWT middleware
router.post('/register', register);
router.post('/usuario', login);
router.put('/usuario', verifyToken, upload.single('perfil'), updatePerfil);

export default router;