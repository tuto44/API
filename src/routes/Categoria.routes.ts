import express from 'express'
import * as CategoriaController from '../controllers/Categorias.controller';
import { Categoria } from '../models/Categorias';

const router = express.Router();

router.get('/', (req, res) => {
    CategoriaController.listarCategorias()
        .then((data) => {
            res.json(data);
        })
        .catch((e) => {
            console.log(e);
            res.status(500).send();
        })
});

router.post('/add', (req, res) => {
    CategoriaController.crearCategoria(req.body as Categoria)
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
    CategoriaController.EliminarCategoria(req.params.id)
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
    if (req.params.id != (req.body as Categoria).IdCategoria.toString()) {
        res.status(400).send();
    } else {
        CategoriaController.ActualizarCategoria(req.body as Categoria, req.params.id)
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