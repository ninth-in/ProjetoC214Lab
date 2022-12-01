import { MdLogin } from "react-icons/md";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/SiderbarLogin';
import Title from '../../components/Title';

import './style.css';

export default function Login() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSave(e) {
        e.preventDefault();

        const data = {
            nome: nome,
            email: email,
            senha: senha,
        }

        const update = await ClientUsers.createUser(data);
        if (update.status === 200) {
            toast.success('Usuário criado com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Login">
                    <MdLogin size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleSave}>
                        
                        <label>E-mail</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <label>Senha</label>
                        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

                        <Link to="/logado">
                            <button type="submit">Entrar</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}