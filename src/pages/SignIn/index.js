import { useForm } from "react-hook-form";
import { createRoutesFromChildren, NavLink, useNavigate } from "react-router-dom"
import yup, { REGEX_EMAIL } from '../../yupGlobal';
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { userSignIn, userSignUp } from "../../redux/store/authentication-slice";

const schema = yup.object().shape({
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
  password: yup.string().required('Required password').passwordha('Password has to has:\n- 1 lower case\n- 1 upper case\n- 1 special character\n- and 8 characters length'),
});

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(schema)
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await dispatch(userSignIn(data));
    console.log('Sign In successfully!!!');
    navigate("/");
  }

  return (
    <div className={`bg-[url('../public/banner1.jpg')] flex flex-col`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`my-8 w-[500px] mx-auto bg-white border rounded-2xl flex flex-col`}>
          <div className={`mt-12 italic text-4xl text-gray-500 font-normal flex justify-center`}>
            Sign In
          </div>
          <div className={`mx-12 mt-[60px] font-medium border rounded-md`}>
            <input className="w-full bg-transparent border-b p-6 text-xl text-gray-500 outline-2 focus:outline-rose-300" placeholder="Email" {...register("email")}/>
            {errors?.email&&<p className="text-red-500">{errors.email.message}</p>}
            <input className="w-full bg-transparent border-b p-6 text-xl text-gray-500 outline-2 focus:outline-rose-300" placeholder="Password" {...register("password")}/>
            {errors?.password&&<div className="text-red-500 whitespace-pre-line">{errors.password.message}</div>}
          </div>
          <button type="submit" className="mx-12 mt-4 h-[60px] bg-color-primary text-white text-xl">
            SIGN IN
          </button>

          <div className={`mt-[36px] mb-12 italic text-2xl flex justify-center`}>
            <span>Sign Up </span> 
            &nbsp;
            <NavLink to={"/signup"} className="text-blue-400">Click</NavLink>
          </div>
        </div>
      </form>
    </div>
  )
}