import { SlMagnifier } from "react-icons/sl";
import { useState } from 'react';
import { toast } from 'react-toastify';

import ClientUsers from '../../services/user.js';

import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import './style.css';

export default function ListByEmail() {

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    
    async function handleListByEmail(e) {
        e.preventDefault();

        const data = {
            email: email,
        }

        const update = await ClientUsers.listByEmail(data);
        if (update.status === 200) {
            toast.success('Usuário encontrado com sucesso!');
            const userNome = update.data.nome;
            setUserName(userNome);
        } else {
            toast.error('Ops algo deu errado!');
        }  
 
    }

    return (
        <div>
            <Sidebar />
            <div className="content">
                <Title name="Buscar usuário">
                    <SlMagnifier size={30} />
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleListByEmail}>
                        <label>E-mail</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button type="submit">Buscar</button>
                    </form>
                    
                </div>
                <div className="lista">
                    <label>Usuário: </label>
                    <p>{userName}</p>
                </div>
            </div>
            
        </div>
    )
}