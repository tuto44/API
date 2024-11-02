import express from 'express'
import * as PedidoController from '../controllers/Pedido.controller';
import { Pedido } from '../models/Pedido';

const router = express.Router();

router.get('/', (req, res) => {
    PedidoController.listarPedidos()
        .then((data) => {
            res.json(data);
        })
        .catch((e) => {
            console.log(e);
            res.status(500).send();
        })
});

router.post('/add', (req, res) => {
    PedidoController.crearPedido(req.body as Pedido)
        .then((f) => {
            if (f)
                res.status(201).send();
            else
                res.status(500).send();
        })
        .catch((e) => {
            console.log(e);
            res.status(500).send();
        })
});

router.delete('/:id', (req, res) => {
    PedidoController.EliminarPedido(req.params.id)
        .then((f) => {
            if (f)
                res.status(202).send();
            else
                res.status(500).send();
        }).catch((e) => {
            console.log(e);
            res.status(500).send();
        })
});

router.put('/:id', (req, res) => {
    if (req.params.id != (req.body as Pedido).IdPedido.toString()) {
        res.status(400).send();
    } else {
        PedidoController.ActualizarPedido(req.body as Pedido, req.params.id)
            .then((f) => {
                if (f)
                    res.status(202).send();
                else
                    res.status(500).send();
            }).catch((e) => {
                console.log(e);
                res.status(500).send();
            });
    }
})

export default router;