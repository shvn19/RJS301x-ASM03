import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import useClickOutSide from "../../../../hooks/useClickOutSide";
import { userSignOut } from "../../../../redux/store/authentication-slice";

export const UserPanel = ({ activeUser }) => {
  const [ togglePanel, setTogglePanel ] = useState(false);
  const dispatch = useDispatch();
  const refPanel = useRef();

  const handleClick = (e) => {
    setTogglePanel(prev => !prev);
  }
  const handleSignOut = async (e) => {
    try {

      await dispatch(userSignOut());
    } catch(err) {
      console.log('error signout: ', err);
    }
  }

  useClickOutSide(refPanel, () => {
    console.log('click outside')
    refPanel.current.style.opacity = 0;
    setTimeout(() => {
      setTogglePanel(false);
    }, 500);
    
  })

  return (
    <div className="relative flex justify-center items-center cursor-pointer transition duration-500">
      <div className={`w-full px-4 bg-red-50 inline italic text-xl self-stretch flex items-center `} onClick={handleClick}>
        {activeUser.name}
      </div>
      {togglePanel&&
        <div className={`absolute z-50 top-full left-0 w-[150px] bg-red-50 px-4 py-2 italic text-lg transition duration-500`} onClick={handleSignOut}
          ref={refPanel}
        >
          Sign Out
        </div>
      }
    </div>
  )
}