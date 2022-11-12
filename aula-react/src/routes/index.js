import React from "react";
import { Routes, Route } from "react-router-dom";

import Create from '../pages/Create';
import ListUser from '../pages/ListUser';
import ListByEmail from '../pages/ListByEmail';
import Delete from '../pages/Delete';

export default function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Create />} />
            <Route exact path="/list" element={<ListUser />} />
            <Route exact path="/listByEmail" element={<ListByEmail />} />
            <Route exact path="/delete" element={<Delete />} />
        </Routes>
    )
}