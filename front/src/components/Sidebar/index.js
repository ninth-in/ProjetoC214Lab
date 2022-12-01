import { Link } from 'react-router-dom';
import { FaUserPlus, FaUserEdit, FaUserMinus, FaUser } from "react-icons/fa";

import usuario from '../../assets/usuario.png';
import './style.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div>
                <img src={usuario} alt="Foto de perfil do usuário" />
            </div>
            <Link to="/create">
                <FaUserPlus color="white" size={23} />
                Criar
            </Link>
            <Link to="/update">
                <FaUserEdit color="white" size={24} />
                Atualizar
            </Link>
            <Link to="/delete">
                <FaUserMinus color="white" size={24} />
                Deletar
            </Link>
            <Link to="/list">
                <FaUser color="white" size={20} />
                Listar Todos
            </Link>
            <Link to="/listUser">
                <FaUser color="white" size={20} />
                Listar Por Email
            </Link>
            <Link to="/">
                Voltar
            </Link>
        </div>
    )
}