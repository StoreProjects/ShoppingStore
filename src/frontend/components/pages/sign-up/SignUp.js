import React from 'react';

function Alert(props) {
  if (props.isUserSaved === true) {
    return (
      <div class="alert alert-success mt-2">
        <b>¡Hola {props.name}!</b> Ahora eres usuario de <b>ShoppingStar</b>
      </div>
    );
  } else if (props.isUserSaved === false) {
    return (
      <div class="alert alert-danger mt-2">
        ¡Oh no! No te podemos registrar. <b>¡Usa otro nombre de usuario!</b>
      </div>
    );
  } else {
    return null;
  }
}

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      isUserSaved: null,
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
    const REGISTER_API = 'http://localhost:4000/api/register';
    let data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
    };
    fetch(REGISTER_API, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'User Saved') {
          this.setState({
            isUserSaved: true,
          });
        } else {
          this.setState({
            isUserSaved: false,
          });
        }
      });
  }
  render() {
    return (
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card mt-4 shadow">
              <div className="card-header h3 text-center bg-custom">
                Únete a ShoppingStar
              </div>
              <div className="card-body">
                <form method="POST" action="http://localhost:4000/api/register">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Nombre de completo
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      autoFocus
                    />
                  </div>
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
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
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
                    Registrarme
                  </button>
                </form>
                
                {this.state.isUserSaved !== null ? (
                  <Alert
                    name={this.state.name}
                    isUserSaved={this.state.isUserSaved}
                  />
                ) : null}
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default SignUp;
