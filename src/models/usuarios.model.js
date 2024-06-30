import pool from '../config/db.js';

export const registerUser = async ({ email, password }) => {
    const user = { email, password };
    await pool.query('INSERT INTO usuarios SET ?', user);
};

export const findUserByEmail = async (email) => {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    return rows[0];
};

export const updateUserProfile = async (email, { perfil, name, phone, biografia }) => {
    const updates = {};
    if (perfil) updates.perfil = perfil;
    if (name) updates.name = name;
    if (phone) updates.phone = phone;
    if (biografia) updates.biografia = biografia;

    const fieldsToUpdate = Object.keys(updates).map(key => `${key} = ?`).join(', ');
    const valuesToUpdate = Object.values(updates);
    valuesToUpdate.push(email);

    if (fieldsToUpdate.length > 0) {
        await pool.query(`UPDATE usuarios SET ${fieldsToUpdate} WHERE email = ?`, valuesToUpdate);
    }
};

export const getUserInfo = async (email) => {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    return rows[0];
};