import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardHOCProps } from "../interfaces/intefaces";

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";


// Asigno nuevas propiedades al objeto:
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
     Title: ProductTitle,
     Image: ProductImage,
     Buttons: ProductButtons,
});


export default ProductCard;