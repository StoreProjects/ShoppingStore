import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'Ropa',
      type: 'Vestidos',
      name: 'Zapatillas Nike',
      description: 'Zapatillas en buen estado para uso personal',
      price: 150.0,
      image:
        'https://home.ripley.com.pe/Attachment/WOP_5/2084228910295/2084228910295_2.jpg',
      stock: 12,
    };
  }
  render() {
    return (
      <div className="container py-2 mb-5">
        <div className="row">
          <div className="col-9">
            <div className="card shadow-sm">
              <div className="card-body">
                <h1>{this.state.name}</h1>
                <p>
                  Categoría:{' '}
                  <a
                    href={
                      'https://www.google.com/search?hl=es&q=' +
                      this.state.category
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {this.state.category}
                  </a>{' '}
                  - Tipo: {this.state.type} - Stock: {this.state.stock}
                </p>
                <hr />
                <p className="lead">{this.state.description}</p>
                <div className="product__image-container">
                  <div
                    className="product__image"
                    style={{ backgroundImage: `url(${this.state.image})` }}
                  ></div>
                </div>
                <p className="text-right text-success h1">
                  <button className="btn btn-success btn-lg">
                    Comprar por ${this.state.price}
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card shadow-sm bg-dark">
              <div className="card-header text-white">Carrito de compras</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-secondary text-center">
                  Vacío
                </li>
              </ul>
            </div>
            <div className="card shadow-sm bg-success mt-4">
              <div className="card-header text-white">Otros productos</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Product #1</li>
                <li class="list-group-item">Product #2</li>
                <li class="list-group-item">Product #3</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="card shadow-sm">
          <div className="card-body">{this.props.match.params.id}</div>
        </div> */}
      </div>
    );
  }
}

export default Product;
