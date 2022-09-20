import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { UserPanel } from "./UserPanel";

export const NavBar = () => {
  const activeUser = useSelector(state=>state.auth.activeUser);

  return (
    <div className="mx-[100px] w-[calc(100%-200px)] h-16 bg-white grid grid-cols-3 items-stretch sticky top-0 z-50">
      <div className="flex justify-start">
        <NavLink to={"/"} className='px-4 py-2 text-color-nav-home inline italic text-xl flex items-center'>
          Home 
        </NavLink>
        <NavLink to={"/shop"} className='px-4 py-2 inline italic text-xl flex items-center'>
          Shop
        </NavLink>
      </div>
      
      <div className='px-4 py-2 inline flex justify-center italic text-2xl text-xl flex items-center'>
        BOUTIQUE
      </div>
      <div className="flex justify-end">
        <NavLink to={"/cart"} className='px-4 py-2 inline italic text-xl flex items-center'>
          Cart
        </NavLink>
        {activeUser.name?<UserPanel activeUser={activeUser}/>:
          (<NavLink to={"/signup"} className='px-4 py-2 inline italic text-xl flex items-center'>
            <span>Login / Register</span>
          </NavLink>)
        }
        
      </div>
    </div>
  )
}