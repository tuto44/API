import express from 'express'
import * as ProveedorController from '../controllers/Proveedor.controller';
import { Proveedor } from '../models/Proveedor';

const router = express.Router();

router.get('/', (req, res) => {
    ProveedorController.listarProveedores()
        .then((data) => {
            res.json(data);
        })
        .catch((e) => {
            console.log(e);
            res.status(500).send();
        })
});

router.post('/add', (req, res) => {
    ProveedorController.crearProveedor(req.body as Proveedor)
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
    ProveedorController.EliminarProveedor(req.params.id)
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
    if (req.params.id != (req.body as Proveedor).IdProveedor.toString()) {
        res.status(400).send();
    } else {
        ProveedorController.ActualizarProveedor(req.body as Proveedor, req.params.id)
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