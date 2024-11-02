import GetConnection from "../config/connection";
import { Usuario } from "../models/usuario";

export const Listar = async (): Promise<Usuario[]> => {
    try {
        let tsql = "SELECT * FROM Usuario";
        const pool = await GetConnection();
        let rs = await pool.query<Usuario>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const Agregar = async (usuario: Usuario): Promise<boolean> => {
    try {
        let tsql = `INSERT INTO Usuario(Nombre,Direccion,Telefono,Usuario,Contrasena,TipoUsuario) VALUES('${usuario.Nombre}',${usuario.Direccion}','${usuario.Telefono}','${usuario.Usuario}','${usuario.Contrasena}''${usuario.TipoUsuario}')`;
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
        let tsql = `DELETE FROM Usuario WHERE id=${id}`;
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

export const Editar = async (usr: Usuario, id: number): Promise<boolean> => {
    try {
        let tsql = `UPDATE Usuario SET Nombre='${usr.Nombre}',Direccion=${usr.Direccion}',Telefono=${usr.Telefono}',Usuario=${usr.Usuario}',Contrasena=${usr.Contrasena}',TipoUsuario=${usr.TipoUsuario}' WHERE id=${id}`;
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

export const IniciarSesion = async (Usuario: string, contrasena: string): Promise<Usuario | null> => {
    try {
        const tsql = `
            SELECT * FROM Usuario 
            WHERE Usuario = @Usuario AND Contrasena = @Contrasena`;
        const pool = await GetConnection();
        const request = pool.request();
        
 
        request.input('Usuario', Usuario);
        request.input('Contrasena', contrasena);

        const rs = await request.query(tsql);

        return rs.recordset.length > 0 ? rs.recordset[0] : null;
    } catch (error) {
        throw error; 
    }
}
