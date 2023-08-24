import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../cartwidget/CartWidget.js';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="/images/nav3.jpg" alt="Logo Mousepad" />
                    </Link>
                    <h1>MousePadStore</h1>
                    {/* Puedes mantener el botón de navbar-toggler para efectos visuales */}
                    <div className="navbar-links">
                        <ul className="navbar-nav text-center gap-lg-5">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/control">Pads Control</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/hibridos">Pads Hibridos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/speed">Pads Speed</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                    <CartWidget /> {/* Aquí es donde agregamos el componente CartWidget */}
                </div>
            </nav>
        </header>
    );
}

export default NavBar;