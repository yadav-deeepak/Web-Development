import "./Product.css";

function Product({title, price, features, features2}) {
    console.log(features);
    // const list = features.map((feature) => <li>{feature}</li>);
    let isDiscount = price > 30000;
    let styles = {backgroundColor : isDiscount ? "yellow" : ""};
    return(
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>Price: {price}</h5>
            {isDiscount ? <p>"Discount of 5%"</p> : null}
        </div>
    );
}

export default Product;