import { Link } from 'react-router-dom';
import { FaUserTie } from "react-icons/fa";
import { MdInventory } from "react-icons/md";

import usuario from '../../assets/usuario.png';
import './style.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div>
                <img src={usuario} alt="Foto de perfil do usuário" />
            </div>
            <Link to="/usuario">
                <FaUserTie color="white" size={23} />
                Usuario
            </Link>
            <Link to="/estoque">
                <MdInventory color="white" size={24} />
                Estoque
            </Link>
        </div>
    )
}