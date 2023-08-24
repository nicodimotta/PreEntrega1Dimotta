import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="/images/nav3.jpg" alt="Logo Mousepad" />
                        
                    </a>
                    <h1>MousePadStore: Encuentra tu superficie perfecta</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav text-center gap-lg-5">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Inicio</a>
                            </li>
                            {/* Puedes actualizar las rutas aquí según tu estructura */}
                            <li className="nav-item">
                                <a className="nav-link" href="/control">Pads Control</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/hibridos">Pads Hibridos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/speed">Pads Speed</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
