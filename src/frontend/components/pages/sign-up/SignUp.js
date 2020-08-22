import React from 'react';

function SignUp(props) {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card mt-4 shadow">
            <div className="card-header h3 text-center bg-custom">Únete a ShoppingStar</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Nombre de completo
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label for="username" className="form-label">
                    Nombre de usuario
                  </label>
                  <input type="username" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">
                    Contraseña
                  </label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-success btn-lg btn-block">
                  Registrarme
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default SignUp;
