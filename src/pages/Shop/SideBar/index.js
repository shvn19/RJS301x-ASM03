import { useDispatch } from "react-redux"
import { getAllFileredProducts, getFileredProductsIphone } from "../../../redux/store/products-slice";

export const SideBar = () => {
  const dispatch = useDispatch();
  const handleOnClickAll = () => {
    dispatch(getAllFileredProducts());
  }
  const handleOnClickIphone = () => {
    dispatch(getFileredProductsIphone());
  }
  return (
    <div className={`flex flex-col italic`}>
      <div className={`px-6 py-3 bg-white`}>
        <p className={`text-late-600 font-bold text-2xl`}>
          CATEGORIES
        </p>
      </div>
      <div className={`bg-color-primary px-6 py-3`}>
        <p className={`text-white font-bold`}>
          APPLE
        </p>
      </div>
      <div className={`px-6 py-1`}>
        <button className={`text-slate-500 py-2 italic`} onClick={handleOnClickAll}>
          All
        </button>
      </div>
      <div className={`px-6 py-3 bg-slate-200`}>
        <p className={`text-slate-600 font-bold`}>
          IPHONE & MAC
        </p>
      </div>
      <div className={`px-6 py-1`}>
        <button className={`text-slate-500 py-2 italic`} onClick={handleOnClickIphone}>
          IPhone
        </button>
        <p className={`text-slate-500 py-2`}>
          IPad
        </p>
        <p className={`text-slate-500 py-2`}>
          Macbook
        </p>
      </div>
      <div className={`px-6 py-3 bg-slate-200`}>
        <p className={`text-slate-600 font-bold`}>
          WIRELESS
        </p>
      </div>
      <div className={`px-6 py-1`}>
        <p className={`text-slate-500 py-2`}>
          AirPod
        </p>
        <p className={`text-slate-500 py-2`}>
          Watch
        </p>
      </div>
      <div className={`px-6 py-3 bg-slate-200`}>
        <p className={`text-slate-600 font-bold`}>
          OTHER
        </p>
      </div>
      <div className={`px-6 py-1`}>
        <p className={`text-slate-500 py-2`}>
          Mouse
        </p>
        <p className={`text-slate-500 py-2`}>
          Keyboard
        </p>
        <p className={`text-slate-500 py-2`}>
          Other
        </p>
      </div>



    </div>
  )
}