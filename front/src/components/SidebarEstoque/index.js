import { Link } from 'react-router-dom';
import { FaEdit, FaListAlt } from "react-icons/fa";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { RiDeleteBack2Fill } from "react-icons/ri";


import usuario from '../../assets/usuario.png';
import './style.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div>
                <img src={usuario} alt="Foto de perfil do usuário" />
            </div>
            <Link to="/createEstoque">
                <BsFillPlusSquareFill color="white" size={22} />
                Criar
            </Link>
            <Link to="/updateEstoque">
                <FaEdit color="white" size={24} />
                Atualizar
            </Link>
            <Link to="/deleteEstoque">
                <RiDeleteBack2Fill color="white" size={23} />
                Deletar
            </Link>
            <Link to="/listEstoque">
                <FaListAlt color="white" size={20} />
                Listar Todos
            </Link>
            <Link to="/listUserEstoque">
                <FaListAlt color="white" size={20} />
                Listar Por Descrição
            </Link>
            <Link to="/">
                Voltar
            </Link>
        </div>
    )
}