import { useState } from 'react';
import { toast } from 'react-toastify';
import { MdInventory } from "react-icons/md";

import ClientUsers from '../../../services/product';

import Sidebar from '../../../components/SidebarEstoque';
import Title from '../../../components/Title';

import './style.css';

export default function Delete() {

    const [description, setDescription] = useState('');

    async function handleDelete(e) {
        e.preventDefault();

        const data = {
            description: description,
        }

        const update = await ClientUsers.deleteUser(data);
        if (update.status === 200) {
            toast.success('Produto deletado com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Deletar produto">
                    <MdInventory size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleDelete}>

                        <label>Descrição</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

                        <button type="submit">Deletar</button>
                    </form>
                </div>

            </div>
        </div>
    )
}