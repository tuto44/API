import GetConnection from "../config/connection";
import { Proveedor } from "../models/Proveedor";

export const Listar = async (): Promise<Proveedor[]> => {
    try {
        let tsql = "SELECT * FROM Proveedor";
        const pool = await GetConnection();
        let rs = await pool.query<Proveedor>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const Agregar = async (Proveedor: Proveedor): Promise<boolean> => {
    try {
        let tsql = `INSERT INTO Proveedor(Nombre, Direccion, Telefono) VALUES('${Proveedor.Nombre}',${Proveedor.Direccion}','${Proveedor.Telefono}')`;
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
        let tsql = `DELETE FROM Proveedor WHERE id=${id}`;
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

export const Editar = async (usr: Proveedor, id: number): Promise<boolean> => {
    try {
        let tsql = `UPDATE Proveedor SET ' Nombre=${usr.Nombre}',Direccion='${usr.Direccion}',Telefono=${usr.Telefono}'}' WHERE id=${id}`;
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