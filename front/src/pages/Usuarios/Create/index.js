import { FaUserNinja } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../../services/user.js';

import Sidebar from '../../../components/Sidebar';
import Title from '../../../components/Title';

import './style.css';

export default function Create() {

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
                <Title name="Registrar novo usuário">
                    <FaUserNinja size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleSave}>
                        
                        <label>Nome</label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

                        <label>E-mail</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <label>Senha</label>
                        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

                        <button type="submit">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}