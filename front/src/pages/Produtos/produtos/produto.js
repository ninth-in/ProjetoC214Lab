import Sidebar from '../../../components/SidebarEstoque';
import Title from '../../../components/Title';
import { MdInventory } from "react-icons/md";

import './style.css';

export default function Login() {

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Modificar estoque">
                    <MdInventory size={30} />
                </Title>
            </div>
        </div>
    )
}