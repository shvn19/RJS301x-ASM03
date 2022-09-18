import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom"
import yup from '../../yupGlobal';
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  userName: yup.string().required('Required Username'),
  passWord: yup.string().required('Required password').password('Password has to follow pattern'),
});

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit =(data) => {
    console.log('data submitted: ', data);
  }

  return (
    <div className={`bg-[url('../public/banner1.jpg')] flex flex-col`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`my-8 w-[500px] mx-auto bg-white border rounded-2xl flex flex-col`}>
          <div className={`mt-12 italic text-4xl text-gray-500 font-normal flex justify-center`}>
            Sign Up
          </div>
          <div className={`mx-12 mt-[60px] font-medium border rounded-md`}>
            <input className="w-full bg-transparent border-b p-6 text-xl text-gray-500" placeholder="Full Name" />
            <input className="w-full bg-transparent border-b p-6 text-xl text-gray-500" placeholder="Email" />
            <input className="w-full bg-transparent border-b p-6 text-xl text-gray-500" placeholder="Password" />
            <input className="w-full bg-transparent p-6 text-xl text-gray-500" placeholder="Phone" />
          </div>
          <button type="submit" className="mx-12 mt-4 h-[60px] bg-color-primary text-white text-xl">
            SIGN UP
          </button>

          <div className={`mt-[36px] mb-12 italic text-2xl flex justify-center`}>
            <span>Login? </span> 
            &nbsp;
            <NavLink to={"/"} className="text-blue-400">Click</NavLink>
          </div>
        </div>
      </form>
    </div>
  )
}