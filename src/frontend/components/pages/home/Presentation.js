import React from 'react';
import ShoppingImage from '../../../images/shopping.svg';

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsNumber: 1500,
    };
  }
  render() {
    return (
      <div className="">
        <div className="container my-5">
          <div className="row d-flex flex-row justify-content-center align-items-center">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <div className="display-4 mb-3 d-flex flex-column">
                Más de {this.state.productsNumber} productos
              </div>
              <p className="lead">
                En <b>Shopping Star</b> puedes comprar y vender lo que desees.
                Agrega nuevas categorías. Rankea las compras. Recibe
                notificaciones.
              </p>
              <div className="buttons mb-2">
                <a className="btn btn-success btn-lg" href="#products-catalog">
                  Empezar a explorar
                </a>
                &nbsp;
                <a
                  className="btn btn-outline-success btn-lg"
                  href="/signup"
                >
                  Regístrarme
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <img src={ShoppingImage} className="img-fluid" alt="Hello" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Presentation;
