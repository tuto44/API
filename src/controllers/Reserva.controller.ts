import { Reserva } from "../models/Reserva";
import * as ReservaDao from "../dao/Reserva.dao";

export const listarReservas = async (): Promise<Reserva[]> => {
    try {
        let u: Reserva[] = await ReservaDao.Listar();
        //BUSSINESS
        return u;
    } catch (error) {
        throw error;
    }
}

export const crearReserva = async (Reserva: Reserva): Promise<boolean> => {
    try {
        return await ReservaDao.Agregar(Reserva);
    } catch (error) {
        throw error;
    }
}

export const EliminarReserva = async (id: string): Promise<boolean> => {
    try {
        let obj = parseInt(id);
        return ReservaDao.Eliminar(obj);
    } catch (error) {
        throw error;
    }
}

export const ActualizarReserva = async (usr: Reserva, id: string): Promise<boolean> => {
    try {
        return await ReservaDao.Editar(usr, parseInt(id));
    } catch (error) {
        throw error;
    }
}