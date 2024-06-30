import express from 'express';
import { PORT } from './config/config.js';
import authRoutes from './routes/auth.routes.js';
import path from 'path';
import { validateCORS } from './middlewares/middlewares.js';
import { swaggerDocs } from './config/swagger.js'

const app = express();

app.use(validateCORS);
app.use(express.json());
app.use('/api', authRoutes);

// Configuración de Swagger
swaggerDocs(app);

// Determinar la ruta absoluta del directorio actual
const currentDir = path.resolve();

// Servir archivos estáticos de la carpeta "perfil"
app.use('/perfil', express.static('./uploads/'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;