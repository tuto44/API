import express from 'express'
import * as ProductoController from '../controllers/Producto.controller';
import { Producto } from '../models/Producto';

const router = express.Router();

router.get('/', (req, res) => {
    ProductoController.listarProductos()
        .then((data) => {
            res.json(data);
        })
        .catch((e) => {
            console.log(e);
            res.status(500).send();
        })
});

router.post('/add', (req, res) => {
    ProductoController.crearProducto(req.body as Producto)
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
    ProductoController.EliminarProducto(req.params.id)
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
    if (req.params.id != (req.body as Producto).IdProducto.toString()) {
        res.status(400).send();
    } else {
        ProductoController.ActualizarProducto(req.body as Producto, req.params.id)
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