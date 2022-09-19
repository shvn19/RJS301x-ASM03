import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { priceTransform } from "../../../helpers";

export const CartTotal = () => {
  const cartList = useSelector(state => state.cart.cart);
  const [total, setTotal] = useState(0);
  useEffect(()=> {
    const res = cartList.reduce((prev, cur) => {
      return prev + cur.product.price*cur.quantity;
    }, 0);
    setTotal(res);
  }, [cartList]);
  return (
    <>
      <p className={`text-2xl font-bold italic text-gray-700/90 mb-8`}>
        CART TOTAL
      </p>
      <div className={`grid grid-cols-2 border-b-2 border-b-gray-400 py-2 text-lg`}>
        <div className={``}>
          SUBTOTAL
        </div>
        <div className={`justify-self-end italic`}>
          {`${priceTransform(total)} VNĐ`}
        </div>
      </div>
      <div className={`grid grid-cols-2 py-2 text-xl`}>
        <div className={``}>
          TOTAL
        </div>
        <div className={`justify-self-end italic font-medium`}>
        {`${priceTransform(total)} VNĐ`}
        </div>
      </div>
      <input placeholder="Enter your coupon" className="h-12 w-full border border-gray-300 px-4 mt-12"/>
      <button className="bg-color-primary h-12 w-full">
        <span className="text-white">Apply Coupon</span>
      </button>
    </>
  )
}