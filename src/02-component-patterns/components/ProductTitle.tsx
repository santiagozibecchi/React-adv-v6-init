import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';
export interface Props {
     title?: string,
     className?: string,
     style?: React.CSSProperties,
}

export const ProductTitle = ({ title, className, style }: Props) => {

     const { product } = useContext(ProductContext);
     // let titleShow: string;

     // if (title) {
     //      titleShow = title
     // } else {
     //      titleShow = product.title
     // }

     return (
          <span
               className={`${styles.productDescription} ${className}`}
               style={style}
          >
               {/* {titleShow} */}
               {title ? title : product.title}
          </span>
     )
}