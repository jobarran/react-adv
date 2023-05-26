import { useContext, CSSProperties } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

// Defino las props que voy a recibir
export interface Props {
    title?:string;
    className?: string;
    style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props ) => {

    const { product } = useContext( ProductContext )

    return (
        <span 
            className={ `${styles.productDescription} ${className}` }
            style={ style }
        >{ title ? title : product.title }</span>
    )
}