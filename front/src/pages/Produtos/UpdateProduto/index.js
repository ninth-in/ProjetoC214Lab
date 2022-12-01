import { useState } from 'react';
import { toast } from 'react-toastify';
import { MdInventory } from "react-icons/md";

import ClientUsers from '../../../services/product';

import Sidebar from '../../../components/SidebarEstoque';
import Title from '../../../components/Title';

import './style.css';

export default function Update() {

    const [description, setDescription] = useState('');
    const [weight, setWeight] = useState('');
    const [quantitie, setQuantitie] = useState('');
    const [price, setPrice] = useState('');

    async function handleUpdate(e) {
        e.preventDefault();

        const data = {
            description: description,
            weight: weight,
            quantitie: quantitie,
            price: price,
        }

        const update = await ClientUsers.updateUser(data);
        if (update.status === 200) {
            toast.success('Produto atualizado com sucesso!');
        } else {
            toast.error('Ops algo deu errado!');
        }

    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Atualizar produto">
                    <MdInventory size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleUpdate}>

                        <label>Descrição</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

                        <label>Peso</label>
                        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
                        
                        <label>Quantidade</label>
                        <input type="text" value={quantitie} onChange={(e) => setQuantitie(e.target.value)} />
                        
                        <label>Preço</label>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />

                        <button type="submit">Atualizar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}