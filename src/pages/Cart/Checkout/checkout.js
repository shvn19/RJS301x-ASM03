import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { HModal } from "../../../components/HModal/hmodal";
import yup, { REGEX_EMAIL } from "../../../yupGlobal";
import { InputWithLabel } from "./inputwlabel";
import useScrollBlock from '../../../hooks/useScrollBlock';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { priceTransform } from "../../../helpers";

const schema = yup.object().shape({
  fullName: yup.string().required('Required Full Name'),
  email: yup.string().required('Required Email').test(
    'validator-custom-email',
    function(val, {createError, path}){
      if (val.match(REGEX_EMAIL)
      ) {
        return true;
      } else {
        return createError({
          message: `${val} should follow pattern ${path}`,
          path: path,
        })
      }
    }
  ),
  phoneNumber: yup.string().required('Required Phone Number').matches(/^[0-9]+$/, "Must be only digits").min(8,'Minimum 8 digits')
  .max(12,"Maximum 12 digits"),
  address: yup.string().required('Required Address'),
})

export const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(schema)
  });
  const [isOpenModal, setOpenModal] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  const cartList = useSelector(state => state.cart.cart);

  const onsubmit = () => {
    setOpenModal(true);
    blockScroll();
  }

  useEffect(()=>{
    if(!isOpenModal) {
      allowScroll();
    }
  },[isOpenModal])
  return (
    <div className="px-[100px] mb-12">
      <div className={`bg-slate-50 h-[200px] flex justify-between px-12 items-center italic`}>
        <p className="text-4xl font-bold text-slate-600">CHECKOUT</p>
        <p className="text-lg text-slate-600">HOME / CART / CHECKOUT</p>
      </div>
      <div className={`text-2xl italic mt-8 mb-6 w-full`}>
        BILLING DETAILS
      </div>
      <div className="grid grid-cols-6 gap-6">
        <form className={`col-span-4 flex flex-col gap-6`} onSubmit={handleSubmit(onsubmit)}>
          <InputWithLabel 
            name="fullName"
            label="FULL NAME" 
            labelClassName="text-xl italic"
            inputClassName="border border-gray-200 w-full h-12 p-4" 
            placeholder="Enter Your Full Name Here!" 
            register = {register}
            error={errors?.fullName} 
            errorClassName="italic text-red-500"
          />
          <InputWithLabel 
            name="email"
            label="EMAIL" 
            labelClassName="text-xl italic"
            inputClassName="border border-gray-200 w-full h-12 p-4" 
            placeholder="Enter Your Email Here!" 
            register = {register}
            error={errors?.email} 
            errorClassName="italic text-red-500"
          />
          <InputWithLabel 
            name="phoneNumber"
            label="PHONE NUMBER" 
            labelClassName="text-xl italic"
            inputClassName="border border-gray-200 w-full h-12 p-4" 
            placeholder="Enter Your Email Here!" 
            register = {register}
            error={errors?.phoneNumber} 
            errorClassName="italic text-red-500"
          />
          <InputWithLabel 
            name="address"
            label="ADDRESS" 
            labelClassName="text-xl italic"
            inputClassName="border border-gray-200 w-full h-12 p-4" 
            placeholder="Enter Your Email Here!" 
            register = {register}
            error={errors?.address} 
            errorClassName="italic text-red-500"
          />
            
          <button type="submit" className="text-xl italic px-4 py-2 bg-color-primary text-white w-[150px]">
            Place Order
          </button>
        </form>
        <div className={`col-span-2 `}>
          <div className={`bg-slate-200/80 py-8 px-8`}>
            <p className={`text-2xl`}>
              YOUR ORDER
            </p>
            <div className={`mt-4 flex flex-col`}>
              {
                cartList.map(item=>(
                  <div key={item.product._id.$oid} className={`grid grid-cols-2 border-b border-b-gray-400/50 py-2`}>
                    <div className={``}>
                      {item.product.name}
                    </div>
                    <div className={`justify-self-end`}>
                      {`${priceTransform(item.product.price)} VNĐ x${item.quantity}`}
                    </div>
                  </div>
                ))
              }
              <div className={`grid grid-cols-2 text-xl italic py-4`}>
                <div className={``}>
                  TOTAL
                </div>
                <div className={`justify-self-end`}>
                  {`${priceTransform(cartList.reduce((prev,cur)=>{
                    return prev + cur.product.price*cur.quantity
                  },0))} VNĐ`}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      {isOpenModal&&
        <HModal className="p-8" setOpen={setOpenModal}>
          <p className={`text-xl italic whitespace-pre-line`}>
            {"Congratulation! \n\nYou have placed the Order."}
          </p>
          <div className={`flex justify-center mt-16`}>
            <button className="p-2 bg-color-primary text-white italic w-[150px]" 
              onClick={()=> {
                setOpenModal(false)
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