import pool from '../config/db.js';

// Función para actualizar el perfil del usuario en la base de datos
export const updateUserPerfil = async (email, { perfil, name, phone, biografia }) => {
    try {
        const updates = {};
        if (perfil) updates.perfil = perfil;
        if (name) updates.name = name;
        if (phone) updates.phone = phone;
        if (biografia) updates.biografia = biografia; // Corregir el nombre del campo 'biografia'

        const fieldsToUpdate = Object.keys(updates).map(key => `${key} = ?`).join(', ');
        const valuesToUpdate = Object.values(updates);
        valuesToUpdate.push(email);

        if (fieldsToUpdate.length > 0) {
            await pool.query(`UPDATE usuarios SET ${fieldsToUpdate} WHERE email = ?`, valuesToUpdate);
        }

        // Si llega hasta aquí, la actualización fue exitosa
        return true;
    } catch (error) {
        console.error('Error updating user profile:', error);
        throw error; // Propaga el error para manejarlo en el controlador
    }
};