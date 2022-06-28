import { Props as ProducCardProps } from "../components/ProductCard"
import { Props as ProductButtonProps } from "../components/ProductButtons"
import { Props as ProductImageProps } from "../components/ProductImage"
import { Props as ProductTitleProps } from "../components/ProductTitle"

export interface Product {
     id: string,
     title: string,
     img?: string,
}

export interface ProductContextProps {
     counter: number,
     increaseBy: (value: number) => void
     product: Product
}

export interface ProductCardHOCProps {
     ({ children, product }: ProducCardProps): JSX.Element,
     Buttons: (Props: ProductButtonProps) => JSX.Element,
     Image: (Props: ProductImageProps) => JSX.Element,
     Title: (Props: ProductTitleProps) => JSX.Element,
}