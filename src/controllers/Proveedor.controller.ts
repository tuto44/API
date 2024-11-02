import { Proveedor } from "../models/Proveedor";
import * as ProveedorDao from "../dao/Proveedor.dao";

export const listarProveedores = async (): Promise<Proveedor[]> => {
    try {
        let u: Proveedor[] = await ProveedorDao.Listar();
        //BUSSINESS
        return u;
    } catch (error) {
        throw error;
    }
}

export const crearProveedor = async (Proveedor: Proveedor): Promise<boolean> => {
    try {
        return await ProveedorDao.Agregar(Proveedor);
    } catch (error) {
        throw error;
    }
}

export const EliminarProveedor = async (id: string): Promise<boolean> => {
    try {
        let obj = parseInt(id);
        return ProveedorDao.Eliminar(obj);
    } catch (error) {
        throw error;
    }
}

export const ActualizarProveedor = async (usr: Proveedor, id: string): Promise<boolean> => {
    try {
        return await ProveedorDao.Editar(usr, parseInt(id));
    } catch (error) {
        throw error;
    }
}