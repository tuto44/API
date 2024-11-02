import { Categoria } from "../models/Categorias";
import * as CategoriasDao from "../dao/Categorias.dao";

export const listarCategorias = async (): Promise<Categoria[]> => {
    try {
        let u: Categoria[] = await CategoriasDao.Listar();
        //BUSSINESS
        return u;
    } catch (error) {
        throw error;
    }
}

export const crearCategoria = async (Categoria: Categoria): Promise<boolean> => {
    try {
        return await CategoriasDao.Agregar(Categoria);
    } catch (error) {
        throw error;
    }
}

export const EliminarCategoria = async (id: string): Promise<boolean> => {
    try {
        let obj = parseInt(id);
        return CategoriasDao.Eliminar(obj);
    } catch (error) {
        throw error;
    }
}

export const ActualizarCategoria = async (usr: Categoria, id: string): Promise<boolean> => {
    try {
        return await CategoriasDao.Editar(usr, parseInt(id));
    } catch (error) {
        throw error;
    }
}