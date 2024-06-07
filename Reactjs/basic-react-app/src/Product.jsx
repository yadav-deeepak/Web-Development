import "./Product.css";
import Price from "./Price.jsx";

function Product({title, idx}) {
    let oldPrices = ["12,495","11,900","1,500","599"];
    let newPrices = ["8,999","9,199","899","278"];
    let description = [["8,000 DPI","5 Programmable Buttons"],["Intutive surface","Design for ipad pro"],["Design for ipad pro","Intutive surface"],["Wireless","Optical orientation"]];
    return(
        <div className="Product">
           <h4>{title}</h4>
           <p>{description[idx][0]}</p>
           <p>{description[idx][1]}</p>
           <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}></Price>
        </div>
    );
}

export default Product;