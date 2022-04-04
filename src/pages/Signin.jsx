import kids from "../assets/kids.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { AiFillLock } from "react-icons/ai";

const Signin = () => {
  return (
    <div className='max-w-7xl mx-auto flex flex-row my-14 space-x-12'>
      <img src={kids} alt='An SVG art trying to login' className='w-auto' />
      <div className='basis-1/2 text-center'>
        <div className='text-4xl font-bold'>Sign In</div>
        <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-orange-500 rounded-full shadow flex items-center mx-auto mt-6 mb-3'>
          <FcGoogle className='mr-2' /> Login with Google
        </button>
        <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-orange-500 rounded-full shadow flex items-center mx-auto my-3'>
          <FaFacebook className='mr-2' style={{ color: "	#4267B2" }} />
          Login with Facebook
        </button>
        <hr style={{ border: "1px solid #000" }} className='my-6' />
        <div className='bg-white text-lg font-bold w-12 h-9 mx-auto -mt-10'>
          OR
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='flex flex-col my-3 mx-3 space-y-4'
        >
          <div className='flex bg-slate-200 items-center px-4'>
            <GrMail className='text-orange-500' />
            <input
              type='text'
              placeholder='Enter Your Email'
              className='py-1 px-2 bg-transparent ml-2 w-full'
            />
          </div>
          <div className='flex bg-slate-200 items-center px-4'>
            <AiFillLock className='text-orange-500' />
            <input
              type='password'
              placeholder='Enter Your Password'
              className='py-1 px-2 bg-transparent ml-2 w-full'
            />
          </div>
          <div className='flex justify-between'>
            <div className='text-sm text-orange-500 text-left'>Remember me</div>
            <div className='text-sm text-slate-600 text-right'></div>
            Forgot Password?
          </div>
          <div>
            <button class='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-12 rounded'>
              Sign In
            </button>
            <div className='text-sm my-2'>
              Don't have an account?{" "}
              <span className='text-orange-500'>SignUp</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
