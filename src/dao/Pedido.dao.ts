import GetConnection from "../config/connection";
import { Pedido } from "../models/Pedido";

export const Listar = async (): Promise<Pedido[]> => {
    try {
        let tsql = "SELECT * FROM Pedido";
        const pool = await GetConnection();
        let rs = await pool.query<Pedido>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const Agregar = async (Pedido: Pedido): Promise<boolean> => {
    try {
        let tsql = `INSERT INTO Pedido(IdUsuario, Fecha, Total) VALUES('${Pedido.IdUsuario}',${Pedido.Fecha}','${Pedido.Total}')`;
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
        let tsql = `DELETE FROM Pedido WHERE id=${id}`;
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

export const Editar = async (usr: Pedido, id: number): Promise<boolean> => {
    try {
        let tsql = `UPDATE Pedido SET ' IdUsuario=${usr.IdUsuario}',Fecha='${usr.Fecha}',Total=${usr.Total}'}' WHERE id=${id}`;
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