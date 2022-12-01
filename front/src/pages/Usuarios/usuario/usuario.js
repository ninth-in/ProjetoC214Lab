import Sidebar from '../../../components/Sidebar';
import Title from '../../../components/Title';

import './style.css';

export default function Login() {

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Modificar usuários"></Title>
            </div>
        </div>
    )
}