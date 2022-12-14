import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { priceTransform } from "../../helpers";
import { PreviewImages } from "./PreviewImages";
import styled from 'styled-components';
import { getAllProductsFunc } from "../../redux/store/products-slice";
import { RelatedProducts } from "./RelatedProduct";
import { cartAddProduct } from "../../redux/store/cart-slice";
import useScrollBlock from "../../hooks/useScrollBlock";
import { HModal } from "../../components/HModal/hmodal";

const InputNoArrow = styled.input`
::-webkit-inner-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
}
::-webkit-outer-spin-button{
  -webkit-appearance: none; 
  margin: 0; 
} 
`;

export const DetailPage = () => {
  const productId = useParams();
  const [relProducts, setRelProducts] = useState([]);
  const [prd, setPrd] = useState();
  let products = useSelector(state => state.products.productsList);
  const dispatch = useDispatch();
  const [isOpenModal, setOpenModal] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  
  const [quantity, setQuantity] = useState(1);

  useEffect(()=> {
    async function fetchData() {
      await dispatch(getAllProductsFunc()); 
      return products.filter(prod => prod._id.$oid == productId.id);
    }
    let res;
    if(products.length==0) {
      res= fetchData();
    }
    res = products.filter(prod => prod._id.$oid == productId.id);
    setPrd(res[0]);
  },[dispatch, products]);

  useEffect(() => {
    if (products.length!=0 && prd) {
      const res = products.filter(prod=>prod.category==prd.category);
      setRelProducts(res);
    }
  },[prd, products]);
  
  const handleChangeInput = (event) => {
    setQuantity(+event.target.value);
  }

  const handleMinus = () => {
    setQuantity(prev => {
      if (prev==1) return 1;
      else return prev-1 ;
    });
  }
  const handlePlus = () => {
    setQuantity(prev => {
      return prev+1 ;
    });
  }

  const handleAddToCart = async () => {
    try{
      dispatch(cartAddProduct(prd,quantity));
      setOpenModal(true);
    } catch (error) {
      console.log('Error when adding or updating cart: ', error);
    }
  }

  return (
    <div className={`px-[100px] py-12`}>
      <div className={`grid grid-cols-2 gap-10`}>
        {prd&&<PreviewImages product={prd} />}
        {prd&&<div className={`flex flex-col gap-4 italic`}>
          <p className={`font-bold text-4xl text-gray-500`}>
            {prd?.name}
          </p>
          <p className={`text-xl text-slate-500`}>
            {`${priceTransform(prd?.price)} VN??`}
          </p>
          <p className={`text-slate-400 whitespace-pre-wrap`}>
            {prd?.long_desc}
          </p>
          <p className={``}>
            <span className="text-color-primary font-medium">CATEGORY: &nbsp;&nbsp;  </span>
            <span className="text-slate-400">{`${prd?.category}`}</span>
          </p>
          <div className={`flex`}>
            <div className={`flex items-center px-4 border-t-2 border-l-2 border-b-2 boder-slate-300 h-[40px]`}>
              <InputNoArrow type="number" placeholder="QUANTITY" className="border-none w-[100px] focus:outline-none" value={quantity} onChange={handleChangeInput}/>
              <div className="ml-4 cursor-pointer" onClick={handleMinus}>
                <svg viewBox="0 0 256 512" width="20px" height="20px">
                  <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/>
                </svg>
              </div>
              <span className="flex justify-center ml-4 w-[25px]">{quantity}</span>
              <div className="ml-4 cursor-pointer" onClick={handlePlus}>
                <svg viewBox="0 0 256 512" width="20px" height="20px">
                  <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/>
                </svg>
              </div>
            </div>
            <button className="italic bg-color-primary text-white px-4 h-[40px]" onClick={handleAddToCart}>Add to cart</button>
          </div>
        </div>}
      </div>
      {/* Description  */}
      <div className={`mt-12 italic flex flex-col gap-6 w-2/3`}>
        <button className="px-8 py-4 bg-color-primary text-white w-[300px] cursor-default">Description</button>
        <p className={`text-color-primary`}>
          PRODUCT DESCRIPTION
        </p>
        <p className={`whitespace-pre-line text-slate-400 break-all`}>
          {prd?.long_desc}
        </p>
      </div>
      <div className={`mt-12 flex flex-col gap-6 w-2/3`}>
        <p className={`text-xl font-normal italic`}>
          RELATED PRODUCT
        </p>
        {relProducts.length!=0 && <RelatedProducts products={relProducts}/> }
      </div>
      {isOpenModal&&
        <HModal className="p-8" setOpen={setOpenModal}>
          <p className={`text-xl italic whitespace-pre-line`}>
            {"Item(s) are added to cart"}
          </p>
          <div className={`flex justify-center mt-16`}>
            <button className="p-2 bg-color-primary text-white italic w-[150px]" 
              onClick={()=> {
                setOpenModal(false);
                allowScroll();
              }}
            >
              OK
            </button>
          </div>
        </HModal>
      }
    </div>
  )
}