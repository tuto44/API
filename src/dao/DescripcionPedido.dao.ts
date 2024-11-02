import GetConnection from "../config/connection";
import { DescripcionPedido } from "../models/DescripcionPedido";

export const Listar = async (): Promise<DescripcionPedido[]> => {
    try {
        let tsql = "SELECT * FROM DescripcionPedido";
        const pool = await GetConnection();
        let rs = await pool.query<DescripcionPedido>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const Agregar = async (DescripcionPedido: DescripcionPedido): Promise<boolean> => {
    try {
        let tsql = `INSERT INTO DescripcionPedido(IdProducto, IdPedido, Cantidad, Precio, MontoTotal ) VALUES('${DescripcionPedido.IdProducto}',${DescripcionPedido.IdPedido}','${DescripcionPedido.Cantidad}','${DescripcionPedido.Precio}','${DescripcionPedido.MontoTotal}')`;
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
        let tsql = `DELETE FROM DescripcionPedido WHERE id=${id}`;
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

export const Editar = async (usr: DescripcionPedido, id: number): Promise<boolean> => {
    try {
        let tsql = `UPDATE DescripcionPedido SET ' IdProducto=${usr.IdProducto}',IdPedido='${usr.IdPedido}',Cantidad=${usr.Cantidad}',Precio=${usr.Precio}',MontoTotal=${usr.MontoTotal}'}' WHERE id=${id}`;
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


