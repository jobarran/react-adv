import { ReactElement } from "react";

// Defino las props que voy a recibir
export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[]
}

// Defino como debe ser la informacion del producto que recibo mediante props
export interface Product {
    id: string;
    title: string;
    img?: string
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: ({ title }: {title?: string}) => JSX.Element,
    Image: ({ img }: {img?: string}) => JSX.Element,
    Buttons: () => JSX.Element 
}