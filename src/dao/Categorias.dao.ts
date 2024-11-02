import GetConnection from "../config/connection";
import { Categoria } from "../models/Categorias";

export const Listar = async (): Promise<Categoria[]> => {
    try {
        let tsql = "SELECT * FROM Categoria";
        const pool = await GetConnection();
        let rs = await pool.query<Categoria>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const Agregar = async (Categoria: Categoria): Promise<boolean> => {
    try {
        let tsql = `INSERT INTO Categoria(Nombre) VALUES('${Categoria.Nombre}')`;
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
        let tsql = `DELETE FROM Categoria WHERE id=${id}`;
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

export const Editar = async (usr: Categoria, id: number): Promise<boolean> => {
    try {
        let tsql = `UPDATE Categoria SET ' Nombre=${usr.Nombre}'WHERE id=${id}`;
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