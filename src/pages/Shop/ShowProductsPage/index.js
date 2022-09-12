import { Transition } from "@headlessui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { priceTransform } from "../../../helpers";
import { getAllFileredProducts, getAllProductsFunc, productsActions } from "../../../redux/store/products-slice";
import { SearchAndSort } from "./SearchAndSort"

export const ShowProductsPage = () => {
  const filteredProducts = useSelector(state=> state.products.filteredProducts);
  const counter = useSelector(state=> state.products.counter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log('list: ', filteredProducts);

  useEffect(()=>{
    dispatch(getAllFileredProducts());
  },[]);

  const handleClickProduct = (productId) => {
    console.log('pr: ', productId._id.$oid);
    navigate(`/detail/${productId._id.$oid}`);
  }
  return (
    <div className={`flex flex-col`}>
      <SearchAndSort />
      <div className={`grid grid-cols-3 gap-4 py-6 transition duration-300`}>
        {console.log('productstest: ', filteredProducts)}
        {filteredProducts?.map((prod, index) => (
          <Transition
            key={index}
            appear={true}
            show={true}
            enter="tarnsform transition duration-500"
            enterFrom="opacity-0 rotate-[-30deg] scale-50"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform transition duration-500"
            leaveFrom="opacity-100 rotate-0 scale-100"
            leaveTo="opacity-0 scale-95"
            onClick={()=>handleClickProduct(prod)}
            >
            <div  className={`flex flex-col gap-3 italic items-center transition duration-300`}>
            <img src={prod.img1} alt={prod.short_desc}/>
            <p className={`font-bold text-xl text-slate-600 text-center`}>
              {prod.name}
            </p>
            <p className={`text-slate-600`}>
              {`${priceTransform(prod.price)} VNĐ`}
            </p>
          </div>
          </Transition>
          
        ))}
      </div>
    </div>
  )
}