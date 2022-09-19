import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartAddProduct } from "../../redux/store/cart-slice";

export const Quantity = ({ product, quantity }) => {
  const [q, setQ] = useState();
  const dispatch = useDispatch()
  const handleMinus = () => {
    if (q==1) return;
    else {
      setQ(prev => prev-1);
      dispatch(cartAddProduct(product,-1));
    }
  }
  const handlePlus = () => {
    setQ(prev => {
      return prev+1 ;
    });
    dispatch(cartAddProduct(product,1));
  }

  useEffect(() => {
    setQ(quantity);
  },[])

  return (
    <div className="flex">
      <div className="ml-4 cursor-pointer" onClick={handleMinus}>
        <svg viewBox="0 0 256 512" width="20px" height="20px">
          <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/>
        </svg>
      </div>
      <span className="flex justify-center ml-4 w-[25px]">{q}</span>
      <div className="ml-4 cursor-pointer" onClick={handlePlus}>
        <svg viewBox="0 0 256 512" width="20px" height="20px">
          <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/>
        </svg>
      </div>
    </div>

  )
}