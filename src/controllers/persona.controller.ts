import { Request, Response } from 'express';
import connection from '../db/connection';

export const getPersonas = (req: Request, res: Response) => {
    connection.query('SELECT id, nombre, apellido, correo, tipoDocumento, num_documento, fechaNacimiento FROM persona', (err, data) => {
        if (err) throw err;
        res.json(data);
    });
};

export const getPersona = (req: Request, res: Response) => {
    const { id } = req.params;
    connection.query('SELECT id, nombre, apellido, correo, tipoDocumento, num_documento, fechaNacimiento FROM persona WHERE id = ?', id, (err, data) => {
        if (err) throw err;
        res.json(data[0]);
    });
};

export const deletePersona = (req: Request, res: Response) => {
    const { id } = req.params;
    connection.query('DELETE FROM persona WHERE id = ?', id, (err, data) => {
        if (err) throw err;
        res.json({
            msg: 'persona eliminada con exito'
        });
    });
};

export const postPersona = (req: Request, res: Response) => {
    const { body } = req;
    connection.query('INSERT INTO persona set ?', [body], (err, data) => {
        if (err) throw err;
        res.json({
            msg: 'persona agregada con exito'
        });
    });
};

export const putPersona = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    connection.query('UPDATE persona set ? WHERE id = ? ', [body, id], (err, data) => {
        if (err) throw err;
        res.json({
            msg: "persona actualizada con exito"
        });
    });
};