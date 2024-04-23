import React from "react";
import "./products.css";
import ProductDetail from "../product_detail/Product_Detail";
const Products = () => {
    return (
        <div className="products">
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
        </div>
    );
};

export default Products;