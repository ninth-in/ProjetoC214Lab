import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from '../pages/login/logado';
import Usuario from '../pages/Usuarios/usuario/usuario';
import Estoque from '../pages/Produtos/produtos/produto';

import Create from '../pages/Usuarios/Create';
import Update from '../pages/Usuarios/Update';
import Delete from '../pages/Usuarios/Delete';
import ReadAll from "../pages/Usuarios/ReadAll";
import Read from "../pages/Usuarios/Read";

import CreateEstoque from '../pages/Produtos/CreateProduto/index';
import UpdateEstoque from '../pages/Produtos/UpdateProduto/index';
import DeleteEstoque from '../pages/Produtos/DeleteProduto/index';
import ReadAllEstoque from '../pages/Produtos/ReadAll/index';
import ReadEstoque from '../pages/Produtos/Read/index';

export default function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/usuario" element={<Usuario />} />
            <Route exact path="/estoque" element={<Estoque />} />

            <Route exact path="/create" element={<Create />} />
            <Route exact path="/update" element={<Update />} />
            <Route exact path="/delete" element={<Delete />} />
            <Route exact path="/list" element={<ReadAll />} />
            <Route exact path="/listUser" element={<Read />} />

            <Route exact path="/createEstoque" element={<CreateEstoque />} />
            <Route exact path="/updateEstoque" element={<UpdateEstoque />} />
            <Route exact path="/deleteEstoque" element={<DeleteEstoque />} />
            <Route exact path="/listEstoque" element={<ReadAllEstoque />} />
            <Route exact path="/listUserEstoque" element={<ReadEstoque />} />
        </Routes>
    )
}