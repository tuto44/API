import express from 'express'
import * as usuarioController from '../controllers/Usuario.controller';
import { Usuario } from '../models/usuario';

const router = express.Router();

router.get('/', (req, res) => {
    usuarioController.listarUsuarios()
        .then((data) => {
            res.json(data);
        })
        .catch((e) => {
            console.log(e);
            res.status(500).send();
        })
});

router.post('/add', (req, res) => {
    usuarioController.crearUsuario(req.body as Usuario)
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
    usuarioController.EliminarUsuario(req.params.id)
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
    if (req.params.id != (req.body as Usuario).Idusuario.toString()) {
        res.status(400).send();
    } else {
        usuarioController.ActualizarUsuario(req.body as Usuario, req.params.id)
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