import React from 'react';

function Navbar(props) {
  return (
    <nav className="d-flex flex-column justify-content-center">
      <div className="nav-top">
        <a className="text-success help-link" href="/">Ayuda</a>
        <a className="text-success explore-link" href="#products-catalog">Explorar productos</a>
        <a className="title-custom" href="/">Shopping Star</a>
        <a className="text-success signin-link" href="/signin">Iniciar sesión</a>
        <a className="text-success register-link" href="/signup">Registrarme</a>
      </div>
      <div className="nav-bottom align-self-center">
        <div className="input-group search-group">
          <input
            type="text"
            className="form-control search"
            placeholder="Buscar productos"
          />
          <button
            className="btn btn-success search-button"
          >
            Buscar
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
