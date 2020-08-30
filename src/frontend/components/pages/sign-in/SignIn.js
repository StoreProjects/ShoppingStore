import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isUserLoggedIn: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const LOGIN_API = 'http://localhost:4000/api/login';
    let data = {
      email: this.state.email,
      password: this.state.password,
    };
    fetch(LOGIN_API, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isUserLoggedIn: data.ok,
        });
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
                    <label htmlFor="email" className="form-label">
                      Correo electrónico
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      value={this.state.email}
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
                    onClick={this.handleSubmit}
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
