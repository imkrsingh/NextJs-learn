"use client"
import AddToCart from "./AddToCart";
import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    //<div className={styles.card}>
    <div className='p-5 my-5 bg-slate-100 text-yellow text-xl hover:bg-slate-50'>
      <AddToCart/>
    </div>
  )
}

export default ProductCard
