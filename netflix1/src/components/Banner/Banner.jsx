import { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const Banner = () => {
    const [email, setEmail] = useState("")
    return (
        <>
            <div className="bgImage w-full h-screen leading-tight">
                <div className="w-full h-screen bg-black/50 flex items-center justify-center flex-col leading-tight">
                    <div className="sm:w-4/5 w-11/12 sm:mt-20 -mt-[10vw] banner-text flex items-center justify-center flex-col leading-tight">
                        <h1 className='text-white sm:text-[30px] md:text-[45px] text-[22px] text-center font-bold'>The biggest Indian hits. The best Indian stories. All streaming here.</h1>
                        <p className='text-white mt-5 sm:text-[20px] md:text-[25px] text-[16px] text-center'>Watch anywhere. Cancel anytime.</p>
                        <div className="banner-down mt-5">
                            <p className='text-white mt-5vw sm:text-[20px] md:text-[25px] text-[16px] text-center'>Ready to watch? Enter your email or mobile number to create or restart your membership.</p>
                            <div className="login-detail flex items-center flex-wrap justify-center gap-4 mt-4">
                                <div className="inputBtn">
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email or mobile number' className='sm:w-[25vw] w-[65vw] outline-none text-white border-[1px] border-white px-6 py-[18px] rounded bg-black/40 ' />
                                </div>
                                <div className="loginBtn">
                                    <Link to="/movies">
                                        <button className='bg-[#e50914] hover:bg-[#c11119] duration-150 rounded text-white px-4 py-3 w-2/1 flex items-center sm:text-3xl text-xl m-2'>Get Started <IoIosArrowForward /> </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Banner