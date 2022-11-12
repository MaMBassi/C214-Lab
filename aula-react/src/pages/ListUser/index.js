import { toast } from 'react-toastify';
import { SlList } from "react-icons/sl";
import { useState } from 'react';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function ListUser() {

    const [userName, setUserName] = useState([]);

    async function handleListUser(e) {
        e.preventDefault();

        const update = await ClientUsers.listUser();
        if (update.status === 200) {
            toast.success('Usuários encontrados com sucesso!');
            const userNome = update.data;
            setUserName(userNome);
        } else {
            toast.error('Ops algo deu errado!');
        }
    }

    return (
        <div>
            <Sidebar />

            <div className="content">
                <Title name="Listar usuários">
                    <SlList size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleListUser}>
                        <button type="submit">Listar usuários</button>
                    </form>
                </div>
                <div className="lista">
                    <label>Usuários: </label>
                    <p>
                    {userName.map((usuarios) => (
                        <li>{usuarios.nome}</li>
                    ))}</p>
                </div>
            </div>
        </div>
    )
}