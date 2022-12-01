import { useState } from 'react';
import { toast } from 'react-toastify';
import { MdInventory } from "react-icons/md";

import ClientUsers from '../../../services/product';

import Sidebar from '../../../components/SidebarEstoque';
import Title from '../../../components/Title';

import './style.css';

export default function Read() {

    const [user, setUsers] = useState([]);
    const [description, setDescription] = useState('');

    async function handleRead(e) {
        e.preventDefault();

        const data = {
            description: description,
        }

        const update = await ClientUsers.readUser(data);
        
        if (update.status === 200) {
            setUsers(update.data)
            toast.success('Produto encontrado com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Listar produto">
                    <MdInventory size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleRead}>

                        <label>Descrição</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

                        <button type="submit">Listar</button>

                        <div class="table">
                            <table class="fl-table">
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th>Peso</th>
                                        <th>Quantidade</th>
                                        <th>Preco</th>
                                        <th>Preco Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {user && 
                                        <tr key={1}>
                                            <td>{user.description} </td>
                                            <td>{user.weight} </td>
                                            <td>{user.quantitie} </td>
                                            <td>{user.price} </td>
                                            <td>{user.totalPrice} </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}