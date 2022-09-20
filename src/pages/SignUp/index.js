import { useForm } from "react-hook-form";
import { createRoutesFromChildren, NavLink } from "react-router-dom"
import yup, { REGEX_EMAIL } from '../../yupGlobal';
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { userSignUp } from "../../redux/store/authentication-slice";

const schema = yup.object().shape({
  fullName: yup.string().required('Required Fullname'),
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
  password: yup.string().required('Required password').passwordha('Password has to has:\n- 1 lower case\n- 1 upper case\n- 1 special character\n- and 8 characters length')
  .test('validator-multi-fields', (val,ctx) => {
    if(!ctx.parent.fullName) {
      return false;
    }
    return true;
  }),
  // phone: yup.string().required('Required Phone').matches(/^[0-9]+$/, "Must be only digits").min(5,"Minimum 5 digits")
  // .max(12,"Maximum 12 digits"),
  phone: yup.string().required('Required Phone'),
});

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(schema)
  });

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const res = await dispatch(userSignUp(data));
  }

  return (
    <div className={`bg-[url('../public/banner1.jpg')] flex flex-col`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`my-8 w-[500px] mx-auto bg-white border rounded-2xl flex flex-col`}>
          <div className={`mt-12 italic text-4xl text-gray-500 font-normal flex justify-center`}>
            Sign Up
          </div>
          <div className={`mx-12 mt-[60px] font-medium border rounded-md`}>
            <input className="w-full bg-transparent border-b p-6 text-xl text-gray-500 outline-2 focus:outline-rose-300" placeholder="Full Name" {...register("fullName")}/>
            {errors?.fullName&&<p className="text-red-500">{errors.fullName.message}</p>}
            <input className="w-full bg-transparent border-b p-6 text-xl text-gray-500 outline-2 focus:outline-rose-300" placeholder="Email" {...register("email")}/>
            {errors?.email&&<p className="text-red-500">{errors.email.message}</p>}
            <input className="w-full bg-transparent border-b p-6 text-xl text-gray-500 outline-2 focus:outline-rose-300" placeholder="Password" {...register("password")}/>
            {errors?.password&&<div className="text-red-500 whitespace-pre-line">{errors.password.message}</div>}
            <input className="w-full bg-transparent p-6 text-xl text-gray-500 outline-2 focus:outline-rose-300" placeholder="Phone" {...register("phone")}/>
            {errors?.phone&&<p className="text-red-500">{errors.phone.message}</p>}
          </div>
          <button type="submit" className="mx-12 mt-4 h-[60px] bg-color-primary text-white text-xl">
            SIGN UP
          </button>

          <div className={`mt-[36px] mb-12 italic text-2xl flex justify-center`}>
            <span>Login? </span> 
            &nbsp;
            <NavLink to={"/signin"} className="text-blue-400">Click</NavLink>
          </div>
        </div>
      </form>
    </div>
  )
}