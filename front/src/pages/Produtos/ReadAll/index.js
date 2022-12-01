import { useState } from 'react';
import { toast } from 'react-toastify';
import { MdInventory } from "react-icons/md";

import ClientUsers from '../../../services/product';

import Sidebar from '../../../components/SidebarEstoque';
import Title from '../../../components/Title';

import './style.css';

export default function ReadAll() {

    const [users, setUsers] = useState([]);

    async function handleReadAll(e) {
        e.preventDefault();

        const update = await ClientUsers.readAllUsers();

        if (update.status === 200) {
            setUsers(update.data)
            toast.success('Produtos listados com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Listar todos os produtos">
                    <MdInventory size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleReadAll}>

                        <button type="submit">Listar</button>
                        
                        <div class="table">
                            <table class="fl-table">
                                <thead>
                                    <tr>
                                        <th>Descricao</th>
                                        <th>Peso</th>
                                        <th>Quantidade</th>
                                        <th>Preço</th>
                                        <th>Preço Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {users && users.map((user, index) =>
                                        <tr key={index}>
                                            <td>{user.description} </td>
                                            <td>{user.weight} </td>
                                            <td>{user.quantitie} </td>
                                            <td>{user.price} </td>
                                            <td>{user.totalPrice} </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}