import express from 'express'
import * as DescripcionPedidoController from '../controllers/DescripcionPedido.controller';
import { DescripcionPedido } from '../models/DescripcionPedido';

const router = express.Router();

router.get('/', (req, res) => {
    DescripcionPedidoController.listarDescripcionPedidos()
        .then((data) => {
            res.json(data);
        })
        .catch((e) => {
            console.log(e);
            res.status(500).send();
        })
});

router.post('/add', (req, res) => {
    DescripcionPedidoController.crearDescripcionPedido(req.body as DescripcionPedido)
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
    DescripcionPedidoController.EliminarDescripcionPedido(req.params.id)
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
    if (req.params.id != (req.body as DescripcionPedido).IdDescripcionPedido.toString()) {
        res.status(400).send();
    } else {
        DescripcionPedidoController.ActualizarDescripcionPedido(req.body as DescripcionPedido, req.params.id)
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