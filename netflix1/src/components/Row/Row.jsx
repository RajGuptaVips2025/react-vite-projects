import React from 'react'

function Row(props) {
    console.log(props.items)
    return (
        <>
            <div className="row w-full bg-black border-t-[10px] border-[#232323] ">
                <div className="content flex items-center justify-center py-16">
                    <div className="content-box flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-2 md:gap-10 sm:mx-40 md:mx-20">
                        <div className={`text text-start text-white w-full sm:w-2/3 mx-4 sm:order-${props.items.order}`}>
                            <h1 className='text-center sm:text-start text-[30px] md:text-[55px] sm:text-[50px] font-bold leading-tight'>{props.items.heading}</h1>
                            <p className='text-center mt-4 sm:text-start text-[18px] md:text-[30px] sm:text-[25px]'>{props.items.para}</p>
                        </div>
                        <div className="image relative overflow-hidden">
                            <img src={props.items.img} className='relative z-10 w-[80%] mx-auto sm:w-[100%]' alt="" />
                           
                            <video className={` ${props.items.className ? 'absolute w-[65%] sm:w-full top-8 left-16' : 'w-[50%] sm:w-[64%] absolute top-[20px] sm:top-6 left-[90px] sm:left-[80px]'}`} src={props.items.video} autoPlay muted loop></video>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Row