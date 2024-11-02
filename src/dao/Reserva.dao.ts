import GetConnection from "../config/connection";
import { Reserva } from "../models/Reserva";

export const Listar = async (): Promise<Reserva[]> => {
    try {
        let tsql = "SELECT * FROM Reserva";
        const pool = await GetConnection();
        let rs = await pool.query<Reserva>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const Agregar = async (Reserva: Reserva): Promise<boolean> => {
    try {
        let tsql = `INSERT INTO Reserva( IdUsuario, Fecha,Estado) VALUES('${Reserva.IdUsuario}',${Reserva.Fecha}','${Reserva.Estado}')`;
        const pool = await GetConnection();
        let rs = await pool.query(tsql);
        if (rs != undefined) {
            return rs.rowsAffected.length == 1;
        }
        return false;
    } catch (error) {
        throw error;
    }
}

export const Eliminar = async (id: number): Promise<boolean> => {
    try {
        let tsql = `DELETE FROM Reserva WHERE id=${id}`;
        const pool = await GetConnection();
        let rs = await pool.query(tsql);
        if (rs != undefined) {
            return rs.rowsAffected.length == 1;
        }
        return false;
    } catch (error) {
        throw error;
    }
}

export const Editar = async (usr: Reserva, id: number): Promise<boolean> => {
    try {
        let tsql = `UPDATE Reserva SET IdUsuario='${usr.IdUsuario}',Fecha=${usr.Fecha}',Estado=${usr.Estado}'}' WHERE id=${id}`;
        const pool = await GetConnection();
        let rs = await pool.query(tsql);
        if (rs != undefined) {
            return rs.rowsAffected.length == 1;
        }
        return false;
    } catch (error) {
        throw error;
    }
}