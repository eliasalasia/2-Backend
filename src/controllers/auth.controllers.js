import bcrypt from 'bcrypt'
import pool from '../config/db.js'
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config/config.js';
import { updateUserPerfil } from '../models/usuarios.model.js';


// Función de registro de usuarios
export const register = async (req, res) => {
    const { email, password } = req.body;
   
    if (!email || !password) {
        return res.status(400).json({ message: 'Correo y contraseña son obligatorios' });
    }
    
    if (password.length < 8 || !/[A-Z]/.test(password)) {
        return res.status(400).json({
            message: 'La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula'
        });
    }
    try {
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = { email, password: hashedPassword };
        
        await pool.query('INSERT INTO usuarios SET ?', user);
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ message: 'El correo ya existe' });
        }
        res.status(500).json({ message: error.message });
    }
};


// Función de inicio de sesión de usuarios
export const login = async (req, res) => {
    const { email, password } = req.body;
   
    if (!email || !password) {
        return res.status(400).json({ message: 'Correo y contraseña son obligatorios' });
    }

    try {
       
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        const user = rows[0];
    
        if (!user) {
            return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
        }
   
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
        }
      
        const token = jwt.sign({ email: user.email}, SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ message: 'Inicio de sesión exitoso', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const info = async (req, res) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({ message: 'Authorization header is missing or malformed' });
        }

        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, SECRET_KEY);
        const email = decoded.email;

        const [rows] = await pool.execute('SELECT * FROM usuarios WHERE email = ?', [email]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const user = rows[0];
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user info:', error);
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ message: 'Token expirado' });
        }
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const updatePerfil = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: 'Authorization header is missing or malformed' });
        }
        const decodedToken = jwt.verify(token, SECRET_KEY);
        const email = decodedToken.email;
        const { name, phone, biografia } = req.body;
        const perfil = req.file ? req.file.path : null; 

        await updateUserPerfil(email, { perfil, name, phone, biografia });
        res.status(200).json({ message: 'Profile updated' });
    } catch (error) {
        console.error('Error updating profile:', error);
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        res.status(500).json({ message: 'Internal server error' });
    }
};

