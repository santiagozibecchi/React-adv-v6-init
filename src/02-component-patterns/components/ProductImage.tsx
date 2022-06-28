import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import noImage from '../assests/no-image.jpg';
import styles from '../styles/styles.module.css';

export const ProductImage = ({ img = '' }) => {

     const { product } = useContext(ProductContext);
     let imgToShow: string;

     if (img) { // por props
          imgToShow = img
     } else if (product.img) { // por contexto
          imgToShow = product.img
     } else {
          imgToShow = noImage
     }

     return (
          <img className={styles.productImg} src={imgToShow} alt="Product img" />
     )
}