import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import useClickOutSide from '../../hooks/useClickOutSide'
import useScrollBlock from "../../hooks/useScrollBlock";

const HBackDrop = (props) => {
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
export const HModal = ({ className, children, setOpen }) => {
  const refModal = useRef();
  const dispatch = useDispatch();
  const [blockScroll,allowScroll] = useScrollBlock();
  const posY = window.scrollY;
  useClickOutSide(refModal, ()=>{
    refModal.current.style.opacity = 0;
    setOpen(false);
  });

  useEffect(()=> {
    blockScroll();
    return ()=>{
      allowScroll();
    }
  }, [])

  return (
      <HBackDrop className={`flex justify-center items-center transition duration-500 ease-in`}>
        <div ref={refModal} 
        className={`z-50 max-w-[1000px] max-h-[700px] opacity-100 bg-white rounded-2xl ${className}`} 
        >
          {children}
        </div>
      </HBackDrop>
  )
}