import { Pedido } from "../models/Pedido";
import * as PedidoDao from "../dao/Pedido.dao";

export const listarPedidos = async (): Promise<Pedido[]> => {
    try {
        let u: Pedido[] = await PedidoDao.Listar();
        //BUSSINESS
        return u;
    } catch (error) {
        throw error;
    }
}

export const crearPedido = async (Pedido: Pedido): Promise<boolean> => {
    try {
        return await PedidoDao.Agregar(Pedido);
    } catch (error) {
        throw error;
    }
}

export const EliminarPedido = async (id: string): Promise<boolean> => {
    try {
        let obj = parseInt(id);
        return PedidoDao.Eliminar(obj);
    } catch (error) {
        throw error;
    }
}

export const ActualizarPedido = async (usr: Pedido, id: string): Promise<boolean> => {
    try {
        return await PedidoDao.Editar(usr, parseInt(id));
    } catch (error) {
        throw error;
    }
}