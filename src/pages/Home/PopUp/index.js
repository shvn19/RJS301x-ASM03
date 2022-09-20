import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { priceTransform } from "../../../helpers";
import useClickOutSide from "../../../hooks/useClickOutSide";
import useScrollBlock from "../../../hooks/useScrollBlock";
import { hideModalProduct } from "../../../redux/store/products-slice";

const BackDrop = (props) => {
  return (
    <div className={`absolute left-0 w-full bg-gray-500/50 z-10 overscroll-none ${props.className??''}`}
    style={{
      top: `${Math.round(window.scrollY).toString()}px`,
      height: `${window.innerHeight.toString()}px`,
    }}
    >
      {props.children}
    </div>
  )
}
export const PopUp = ({ allowScroll }) => {
  const refModal = useRef();
  const product = useSelector(state => state?.products?.productModal);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const posY = window.scrollY;
  useClickOutSide(refModal, ()=>{
    refModal.current.style.opacity = 0;
    dispatch(hideModalProduct());
  }
  );

  const handleViewDetail = () => {
    allowScroll();
    navigate(`/detail/${product._id.$oid}`);
  }

  return (
      <BackDrop className={`flex justify-center items-center transition duration-500 ease-in`}>
        <div ref={refModal} className={`z-50 grid grid-cols-2 gap-6 max-w-[1000px] max-h-[700px] opacity-100 mx-16 my-16 bg-white items-center p-16 rounded-2xl`} 
        >
          <img src={product.img1} alt={product.name} className="w-full max-h-[592px]"/>
          <div className="flex flex-col gap-6 z-50 italic overflow-auto max-h-[592px]">
            <p className="z-[100] font-bold text-3xl text-color-primary">{product.name}</p>
            <p className="z-[100] text-xl text-slate-500">{`${priceTransform(product.price)} VNĐ`}</p>
            <p className="z-[100] text-lg text-slate-400 whitespace-pre-line">{product.long_desc}</p>
            <button 
              className="text-lg bg-color-primary px-8 py-4 text-white self-start hover:bg-slate-700 transition duration-300 ease-in"
              onClick={handleViewDetail}
            >
                View Detail
            </button>
          </div>
        </div>
      </BackDrop>
  )
}