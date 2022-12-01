import { FaUserNinja } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../../services/user.js';

import Sidebar from '../../../components/Sidebar';
import Title from '../../../components/Title';

import './style.css';

export default function Update() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    async function handleUpdate(e) {
        e.preventDefault();

        const data = {
            nome: nome,
            email: email,
        }

        const update = await ClientUsers.updateUser(data);
        if (update.status === 200) {
            toast.success('Usuário atualizado com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }

    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Atualizar usuário">
                    <FaUserNinja size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleUpdate}>

                        <label>Nome</label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

                        <label>E-mail</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <button type="submit">Atualizar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}