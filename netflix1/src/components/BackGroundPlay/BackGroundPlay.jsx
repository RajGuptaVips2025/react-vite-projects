import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useSelector } from 'react-redux'

const BackGroundPlay = () => {
    const movies=useSelector((state) => state.movie.popular)
    console.log(movies)
    // const movie=movies[0]
    return (
        <>
            <div className="video w-[100%]">
                <div className='videoPlay'>
                    <iframe className='w-[100%] h-[80vh] aspect-video' src="https://www.youtube.com/embed/KLuTLF3x9sA?si=PHtvru9cyok38-Kq" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="contentText cursor-pointer absolute z-10 ml-10 top-[18%]">
                    <div className="texts text-white">
                        {/* <h1 className='text-[24px] sm:text-[58px] font-semibold w-fit capitalize' >{movie.title}</h1> */}
                        {/* <p className='w-[90%] sm:w-[60%] text-[18px] sm:text-[24px] leading-tight shrink-0' >{movie.overview}</p> */}
                    </div>
                    <div className="buttons mt-3">
                        <div className="palyBtn flex gap-2">
                            <button className='flex items-center justify-center cursor-pointer text-white text-[16px] sm:text-[24px] duration-200 hover:bg-[#c11119] bg-[rgba(229,9,20)] rounded px-6 py-2 '><CiPlay1/> <span>Play</span></button>
                            <button className='flex items-center justify-center cursor-pointer hover:bg-white/60 duration-200 text-[16px] sm:text-[24px] bg-white/50 rounded px-6'><IoIosInformationCircleOutline/> <span>Watch Later</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BackGroundPlay