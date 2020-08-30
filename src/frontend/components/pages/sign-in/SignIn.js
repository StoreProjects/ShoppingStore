import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card mt-4 shadow">
              <div className="card-header h3 text-center bg-custom">Entrar</div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Nombre de usuario
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                      autoFocus
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success btn-lg btn-block"
                  >
                    Iniciar sesión
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
}

export default SignIn;
