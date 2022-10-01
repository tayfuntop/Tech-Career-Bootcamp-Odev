import Card from "./cart/Card";
import Header from "./header/Header";
import Product from "./products/Product";
import "./Container.css";

function Container() {
  return (
    <div className="container">
        <Header />
        <div className="products">
            <Product />
            <Card />
        </div>
    </div>
  )
}

export default Container