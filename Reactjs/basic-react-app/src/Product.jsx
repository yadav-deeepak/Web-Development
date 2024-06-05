import "./Product.css";

function Product({title, price, features, features2}) {
    console.log(features);
    // const list = features.map((feature) => <li>{feature}</li>);
    return(
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price: {price}</h5>
            {price > 30000 ? <p>"Discount of 5%"</p> : null}
        </div>
    );
}

export default Product;