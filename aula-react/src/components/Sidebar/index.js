import { Link } from 'react-router-dom';
import {SlUserFollow, SlUserUnfollow, SlUser} from "react-icons/sl";

import avatar from '../../assets/avatar.png';
import './style.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div>
                <img src={avatar} alt="Foto de perfil do usuário" />
            </div>
            <Link to="/">
                <SlUserFollow color="white" size={24} />
                Criar
            </Link>
            <Link to="/list">
                <SlUser color="white" size={24} />
                Listar usuários
            </Link>
            <Link to="/listByEmail">
                <SlUser color="white" size={24} />
                Buscar usuário
            </Link>
            <Link to="/delete">
                <SlUserUnfollow color="white" size={24} />
                Deletar
            </Link>
        </div>
    )
}