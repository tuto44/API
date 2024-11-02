import { DescripcionPedido } from "../models/DescripcionPedido";
import * as DescripcionPedidoDao from "../dao/DescripcionPedido.dao";

export const listarDescripcionPedidos = async (): Promise<DescripcionPedido[]> => {
    try {
        let u: DescripcionPedido[] = await DescripcionPedidoDao.Listar();
        //BUSSINESS
        return u;
    } catch (error) {
        throw error;
    }
}

export const crearDescripcionPedido = async (DescripcionPedido: DescripcionPedido): Promise<boolean> => {
    try {
        return await DescripcionPedidoDao.Agregar(DescripcionPedido);
    } catch (error) {
        throw error;
    }
}

export const EliminarDescripcionPedido = async (id: string): Promise<boolean> => {
    try {
        let obj = parseInt(id);
        return DescripcionPedidoDao.Eliminar(obj);
    } catch (error) {
        throw error;
    }
}

export const ActualizarDescripcionPedido = async (usr: DescripcionPedido, id: string): Promise<boolean> => {
    try {
        return await DescripcionPedidoDao.Editar(usr, parseInt(id));
    } catch (error) {
        throw error;
    }
}