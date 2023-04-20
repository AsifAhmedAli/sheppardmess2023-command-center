import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumb';
import Logo from '../../images/logo/logo.png'
import loginLeft from '../../images/login/loginLeft.png'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (

    <div className=' w-[1920px] h-[1080px]  bg-[#181A25] relative'>
    <div className='flex p-13 justify-evenly'>
    <div className="absolute -top-[19px] left-0 w-[231px] h-[392px] bg-[url(/loginbgleft.png)] bg-no-repeat bg-contain opacity-60"></div>
      <div className='px-15 flex flex-col  w-1/2'>
        {/* <Link className='mb-5.5 inline-block' to='/'>
              <img className='hidden dark:block' src={Logo} alt='Logo' />
            </Link> */}

        <h1 className='text-[48px] text-[#FFFFFF] leading-[68px] font-semibold mt-28'>
          Lets Sign In <span className='text-[#B5F4FF]'>your</span> Account!
        </h1>
        <p className='text-[24px] text-[#FFFFFFCC] leading-[31.25px] font-normal mt-8'>Lorem ipsum, or lipsum as it is sometimes known, is dummy <br /> text used in laying out print, graphic or web designs.</p>

        <div>
          <img className='w-[394.25px] h-[415.83px] mt-20 ml-35' src={loginLeft} alt='Login Left Image' />
        </div>
      </div>
      {/* right */}
      <div className='w-[772px] h-[872px]  bg-opacity-20p-5 mt-10 '>
            {/* <span className='mb-1.5 block font-medium'>Start for free</span> */}
              <Link className='mt-5 ml-14 inline-block' to='/'>
              <img className='' src={Logo} alt='Logo' />
            </Link>
            <div className='text-center mt-20 mb-5'>
            <h2 className='text-[40px] text-[#FFFFFF] leading-[48px] font-bold capitalize'>
            Sign in
            </h2>
            <p className='text-[20px] text-[#C3C3C3] leading-[30px] font-medium mt-5 capitalize'>Enter your email & password to sign in!</p>
            </div>
            <div className='flex flex-col items-center'>
            <button className='flex w-[420px] items-center justify-center gap-[13px] rounded-[5px] border bg-transparent border-[#E8E8E8] p-4 hover:bg-opacity-50'>
                <span>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clipPath='url(#clip0_191_13499)'>
                      <path
                        d='M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217'
                        fill='#4285F4'
                      />
                      <path
                        d='M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999'
                        fill='#34A853'
                      />
                      <path
                        d='M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z'
                        fill='#FBBC05'
                      />
                      <path
                        d='M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z'
                        fill='#EB4335'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_191_13499'>
                        <rect width='20' height='20' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Continue with Google
              </button>
            </div>
              <p className='text-center text-[14px] text-[#A1A1A1] opacity-50 my-5'>------------- or Sign in with Email ------------- </p>
           <div className='flex flex-col items-center'>
           <form>
              <div className='flex flex-col items-center'>
                <div className='mb-5 flex flex-col'>
                  <label htmlFor="" className='text-[#828282] text-[14px] leading-[19.1px] font-semibold py-1'>Email</label>
          
                  <input className='w-[420px] border border-[#DED2D9] bg-transparent py-[13px] px-[10px] rounded-[5px] text-white' type="email" name="" placeholder='mail@abc.com' id="" />
                </div>
                <div className='mb-5 flex flex-col'>
                  <label htmlFor="" className='text-[#828282] text-[14px] leading-[19.1px] font-semibold py-1'>Password</label>
                
                  <input className='w-[420px] border border-[#DED2D9] bg-transparent py-[13px] px-[10px] rounded-[5px] text-white' type="email" name="" placeholder='*****************' id="" />
                </div>
              </div>
              <div className='w-[420px] mx-auto flex justify-between -mt-4'>
                <div className='flex items-center'>
                  <input className='w-[12px] h-[12px] accent-[#28C0CA] cursor-pointer pl-2' type="checkbox" name="" id="" />
                  <p className='text-[#A1A1A1] text-[12px] leading-[16.37px] font-normal pl-2'>Remember Me</p>
                </div>
                <div className=''>
                <Link to='/' className='text-[#FEAA10] text-[12px] leading-[16.37px] font-normal cursor-pointer'>
                    Forgot Password?
                  </Link>
                </div>
               
              </div>
              <div className='text-[#FFFFFF] text-[18px] leading-[24.55px] font-extrabold mt-5'>
                <input
                  type='submit'
                  value='Login'
                  className='w-[420px] cursor-pointer bg-[#28C0CA] py-[13px] px-[10px] rounded-[5px] hover:bg-opacity-90'
                />
              </div>
              <div className='mt-25 text-center'>
                <p className='text-[#828282] text-[18px] leading-[23.44px] font-normal'>
                Not Registered Yet?{' '}
                  <Link to='/auth/signup' className='text-[#28C0CA] text-[18px] leading-[23.44px] font-bold'>
                  Create an account
                  </Link>
                </p>
              </div>
            </form>
           </div>
          </div>
    </div>
    </div>

  )
}

export default SignIn;

