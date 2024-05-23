import {useState} from 'react'
import logo from '../../logo.png'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoLanguageOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
    const [dropHeight, setDropHeight] = useState(false);
    const [dropval, setDropval] = useState("english")
    const langBtn = () => {
        setDropHeight(prev => !prev);

    }
    const langSelect = (e) => {
        setDropval(e.target.outerText)
        setDropHeight(prev => !prev);
    }
    return (
        <>
            <nav className='min-w-full p-5 absolute mt-[3px]'>
                <div className='flex justify-between items-center mx-auto sm:w-4/5'>
                    <div className="logo">
                       <Link to="/">
                         <img className='sm:w-[150px] md:w-[150px] w-[20vw]' src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="nav_right flex gap-6 items-center sm:mr-5">
                        <div className="buttons">
                            <button onClick={langBtn} className='border-[1px] text-white border-white px-3 py-1 capitalize flex items-center gap-2 rounded bg-black/10'> <IoLanguageOutline/> {dropval}  <IoMdArrowDropdown /></button>
                            <div className={`selector text-center bg-white rounded-xl ${dropHeight ? "block" : "hidden"} overflow-hidden`}>
                                <li onClick={langSelect} className='capitalize list-none font-bold my-1 hover:bg-blue-600 hover:text-white cursor-pointer'>english</li>
                                <li onClick={langSelect}  className='capitalize list-none font-bold my-1 hover:bg-blue-600 hover:text-white cursor-pointer'>हिन्दी</li>
                            </div>
                        </div>
                        <div className="sign_up">
                           <Link to="/signUp" >
                            <button className='bg-[rgba(229,9,20)] hover:bg-[#c11119] text-white px-4 text-sm py-[5.2px] rounded font-bold'>Sign In</button>
                           </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header