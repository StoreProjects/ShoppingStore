import React from 'react';

function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center my-5 lead">
            <b>ShoppingStar</b> es una tienda digital construida en NodeJS
            integrada con ReactJS, Express, etc.
            <hr/>
            <b>ShoppingStar v1.0.0</b>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
