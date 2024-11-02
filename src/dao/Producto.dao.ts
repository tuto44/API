import GetConnection from "../config/connection";
import { Producto } from "../models/Producto";

export const Listar = async (): Promise<Producto[]> => {
    try {
        let tsql = "SELECT * FROM Producto";
        const pool = await GetConnection();
        let rs = await pool.query<Producto>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const Agregar = async (Producto: Producto): Promise<boolean> => {
    try {
        let tsql = `INSERT INTO Producto(IdProveedor, IdCategoria, Nombre,Precio, Stock, Imagen) VALUES('${Producto.IdProveedor}',${Producto.IdCategoria}','${Producto.Nombre}','${Producto.Precio}','${Producto.Stock}','${Producto.Imagen}')`;
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
        let tsql = `DELETE FROM Producto WHERE id=${id}`;
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

export const Editar = async (usr: Producto, id: number): Promise<boolean> => {
    try {
        let tsql = `UPDATE Producto SET ' IdProveedor=${usr.IdProveedor}',IdCategoria='${usr.IdCategoria}',Nombre=${usr.Nombre}',Precio=${usr.Precio}',Stock=${usr.Stock}',Imagen=${usr.Imagen}'}' WHERE id=${id}`;
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