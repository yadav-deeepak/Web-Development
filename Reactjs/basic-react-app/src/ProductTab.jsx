import Product from "./Product";

function ProductTab() { 
    let options =["hi-tech", "durable", "fast"];
    return(
        <>
        <Product title="iPhone" price="50000"></Product>
        <Product title="RealMe" price={30000}></Product>
        <Product title="Oppo A9" price="15000"></Product>
        </>
    );
}

export default ProductTab;