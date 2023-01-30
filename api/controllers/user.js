import { db } from "../db.js";

export const getUsers = (_, res) =>{
    const query = "SELECT * FROM usuarios";

    db.query(query, (err, data)=>{
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUsers = (req, res) => {
    const query = 
    "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    db.query(query, [values], (err) =>{
        if (err) return res.json(err);

        return res.status(200).json("Usuario criado com sucesso");
    });
};

export const updateUsers = (req, res) => {
    const query = 
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    db.query(query, [...values, req.params.id], (err) =>{
        if (err) return res.json(err);

        return res.status(200).json("Usuario atualizado com sucesso");
    });
};

export const deleteUsers = (req, res) =>{
    const query = "DELETE FROM usuarios WHERE `id` = ?";

    db.query(query, [req.params.id], (err, data)=>{
        if (err) return res.json(err);

        return res.status(200).json("Usuario deletado com sucesso");
    });
};