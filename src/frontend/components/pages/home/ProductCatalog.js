import React from 'react';
import ProductCard from './ProductCard.js';

const testProducts = [
  {
    id: 1,
    name: 'Camiseta',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Camiseta_lisa.jpg',
    price: 59,
  },
  {
    id: 2,
    name: 'Zapatillas',
    image: 'https://home.ripley.com.pe/Attachment/WOP_5/2084228910295/2084228910295_2.jpg',
    price: 29,
  },
  {
    id: 3,
    name: 'Smartphone',
    image: 'https://plazavea.vteximg.com.br/arquivos/ids/212578-1000-1000/20172640.jpg?v=636885476650430000',
    price: 199,
  },
  {
    id: 4,
    name: 'Space Capsules',
    image: 'https://images.newscientist.com/wp-content/uploads/2014/05/dn25652-2_800.jpg?width=300',
    price: 4990,
  },
];

function ProductCatalog() {
  return (
    <section
      id="products-catalog"
      className="min-vh-100 product-catalog bg-custom"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center text-white mt-5 mb-4">
            <div className="display-4">Explorar productos</div>
          </div>
        </div>
        <div className="row products-stack">
          {testProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCatalog;
