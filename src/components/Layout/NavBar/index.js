import { NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <div className="mx-[100px] w-[calc(100%-200px)] bg-blue-50 grid grid-cols-3 ">
      <div className="flex justify-start">
        <NavLink to={"/"} className='px-4 py-2 text-color-nav-home bg-red-50 inline italic text-xl'>
          Home 
        </NavLink>
        <NavLink to={"/shop"} className='px-4 py-2 bg-red-50 inline italic text-xl'>
          Shop
        </NavLink>
      </div>
      
      <div className='px-4 py-2 bg-red-50 inline flex justify-center italic text-2xl text-xl'>
        BOUTIQUE
      </div>
      <div className="flex justify-end">
        <NavLink to={"/"} className='px-4 py-2 bg-red-50 inline italic text-xl'>
          Cart
        </NavLink>
        <NavLink to={"/signup"} className='px-4 py-2 bg-red-50 inline italic text-xl'>
          Login / Register
        </NavLink>
      </div>
    </div>
  )
}