import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { priceTransform } from "../../helpers";
import { cartDeleteProduct } from "../../redux/store/cart-slice";
import { CartTotal } from "./CartTotal";
import { Quantity } from "./quantity";

export const Cart = () => {
  const cartList = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleDelete = (prd) => {
    console.log('in handleDelete: ', prd);
    dispatch(cartDeleteProduct(prd));
  }

  const handleShopping = () => {
    navigate("/shop");
  }

  const handleCheckout = () => {
    navigate("/checkout")
  }

  return (
    <div className="px-[100px]">
      <div className={`bg-slate-50 h-[200px] flex justify-between px-12 items-center italic`}>
        <p className="text-4xl font-bold text-slate-600">CART</p>
        <p className="text-lg text-slate-600">CART</p>
      </div>
      <div className={`text-2xl italic mt-8 mb-6 w-full`}>
        SHOPPING CART
      </div>
      <div className="grid grid-cols-6 gap-6">
        {/* <table className="col-span-4">
          <tr>
            <th>
          </tr>
        </table> */}
        <div className={`col-span-4 grid grid-cols-[repeat(6,auto)]`}>
          <div className={`text-xl italic px-6 py-3 bg-gray-200/50`}>
            IMAGE
          </div>
          <div className={`text-xl italic px-6 py-3 bg-gray-200/50`}>
            PRODUCT
          </div>
          <div className={`text-xl italic px-6 py-3 bg-gray-200/50`}>
            PRICE
          </div>
          <div className={`text-xl italic px-6 py-3 bg-gray-200/50`}>
            QUANTITY
          </div>
          <div className={`text-xl italic px-6 py-3 bg-gray-200/50`}>
            TOTAL
          </div>
          <div className={`text-xl italic px-6 py-3 bg-gray-200/50`}>
            REMOVE
          </div>
          {cartList.map((prd,id)=>(
            <>
              <div className={`justify-self-stretch self-stretch flex justify-center items-center p-2 ${id%2==1?'bg-blue-100/50':''}`}>
                <img src={prd.product.img1} alt={prd.product.name}/>
              </div>
              <div className={`justify-self-stretch self-stretch flex justify-center items-center text-center p-2 text-lg font-medium italic ${id%2==1?'bg-blue-100/50':''}`}>
                {prd.product.name}
              </div>
              <div className={`justify-self-stretch self-stretch flex justify-center items-center text-center p-2 ${id%2==1?'bg-blue-100/50':''}`}>
                {`${priceTransform(prd.product.price)} VNĐ`}
              </div>
              <div className={`justify-self-stretch self-stretch flex justify-center items-center text-center p-2 ${id%2==1?'bg-blue-100/50':''}`}>
                <Quantity product={prd.product} quantity={prd.quantity} /> 
              </div>
              <div className={`justify-self-stretch self-stretch flex justify-center items-center text-center p-2 ${id%2==1?'bg-blue-100/50':''}`}>
                {`${priceTransform(prd.product.price*prd.quantity)} VNĐ`}
              </div>
              <div className={`justify-self-stretch self-stretch flex justify-center items-center text-center p-2 ${id%2==1?'bg-blue-100/50':''}`}>
                <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px" height="20px" onClick={()=>handleDelete(prd.product)}>
                  <path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"/>
                </svg>
              </div>
            </>
          ))}
          <div className={`px-8 py-6 flex justify-between items-center w-full col-span-6 bg-gray-100`}>
            <div className={`flex gap-2 items-center cursor-pointer`} onClick={handleShopping}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
                <path d="M109.3 288L480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288z"/>
              </svg>
              <span>Continue shopping</span>
            </div>
            <div className={`p-2 border-2 border-black flex items-center cursor-pointer`} onClick={handleCheckout}>
              Proceed to checkout 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h4 ml-2">
                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className={`col-span-2 bg-slate-200/80 py-8 px-14`}>
          <CartTotal />
        </div>
      </div>
    </div>
  )
}