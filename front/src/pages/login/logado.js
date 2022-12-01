import { MdLogin } from "react-icons/md";
import { useState } from 'react';
import { toast } from 'react-toastify';


import Sidebar from '../../components/SiderbarLogado';
import Title from '../../components/Title';

import './style.css';

export default function Login() {

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Bem vindo"></Title>
            </div>
        </div>
    )
}