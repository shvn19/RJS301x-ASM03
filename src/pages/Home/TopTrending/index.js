
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { priceTransform } from '../../../helpers';
import useScrollBlock from '../../../hooks/useScrollBlock';
import { getAllProductsFunc, setProduct, showModalProduct } from '../../../redux/store/products-slice';
import { PopUp } from '../PopUp';

export const TopTrending = () => {
  const dispatch = useDispatch();
  const prods = useSelector((state) => state?.products?.productsList);
  const isShowModal = useSelector(state => state.products.showModal);
  // const [isShow,setIsShow] = useState(false);
  const [shownProduct, setShownProduct] = useState();
  const [blockScroll, allowScroll] = useScrollBlock();
  useEffect(() => {
    console.log('in useeffect ...');
    dispatch(getAllProductsFunc());
  },[]);

  const handleOnClick = (prod) => {
    console.log('product :', prod );
    dispatch(setProduct(prod));
    dispatch(showModalProduct());
    blockScroll();
  }

  useEffect(()=>{
    if(isShowModal==false) {
      allowScroll();
    }
  },[isShowModal]);

  return (
    <>
      <div className='grid grid-cols-4 gap-8 px-10 py-6 bg-slate-50'>
        {console.log('prods: ', prods)}
        {
          prods.length>0?prods?.map((prod, index)=>(
            <div key={index} className='flex flex-col gap-4 italic items-center hover:scale-105 hover:opacity-90 transition duration-500' onClick={()=>handleOnClick(prod)}>
              <img src={prod.img1} alt={prod.id} />
              <p className='text-xl font-bold text-color-primary text-center'>{prod.name}</p>
              <p className='text-lg text-slate-500'>{`${priceTransform(prod.price)} VNĐ`}</p>
            </div>)):''}
      </div>
      {isShowModal&&<PopUp allowScroll={allowScroll} />}
    </>
    
  )
}