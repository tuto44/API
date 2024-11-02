import { Producto } from "../models/Producto";
import * as ProductoDao from "../dao/Producto.dao";

export const listarProductos = async (): Promise<Producto[]> => {
    try {
        let u: Producto[] = await ProductoDao.Listar();
        //BUSSINESS
        return u;
    } catch (error) {
        throw error;
    }
}

export const crearProducto = async (Producto: Producto): Promise<boolean> => {
    try {
        return await ProductoDao.Agregar(Producto);
    } catch (error) {
        throw error;
    }
}

export const EliminarProducto = async (id: string): Promise<boolean> => {
    try {
        let obj = parseInt(id);
        return ProductoDao.Eliminar(obj);
    } catch (error) {
        throw error;
    }
}

export const ActualizarProducto = async (usr: Producto, id: string): Promise<boolean> => {
    try {
        return await ProductoDao.Editar(usr, parseInt(id));
    } catch (error) {
        throw error;
    }
}