import React from 'react';
import {NavLink} from 'react-router-dom';

export function Header() {
    return (
        <header className="app-header">
            <NavLink to="main">Task</NavLink>
            <NavLink to="heroes">Heroes</NavLink>
        </header>
    )
}
