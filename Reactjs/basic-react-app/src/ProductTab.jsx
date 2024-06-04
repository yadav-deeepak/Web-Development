import Product from "./Product";

function ProductTab() { 
    return(
        <>
        <Product title="iPhone" price="50k" features={["hi-tech", "durable", "fast"]} features2={{ a: "hi-tech", b: "durable", c: "fast"}}></Product>
        </>
    );
}

export default ProductTab;