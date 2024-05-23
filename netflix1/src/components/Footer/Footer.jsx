import {useState} from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoLanguageOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
function Footer() {
    const links = ["FAQ",
        "Help Centre",
        "Account",
        "Media Centre",
        "Investor Relations",
        "Jobs",
        "Ways to Watch",
        "Terms of Use",
        "Privacy",
        "Cookie Preferences",
        "Corporate Information",
        "Contact Us",
        "Speed Test",
        "Legal Notices",
        "Only on Netflix"]
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
            <div className="row w-full bg-black border-t-[10px] pb-[1px] border-[#232323] ">
                <div className="container-box bg-black my-[72px] w-[85%] mx-auto  px-2 sm:px-[48px]">
                    <p className='text-[#FFFFFFB3] text-[16px] ml-[12px] '>Questions? Call <span className='underline'>000-800-919-1694</span></p>
                    <ul className='flex flex-wrap'>
                        {links.map((link, index) => (
                            <li key={index} className='text-[#FFFFFFB3] cursor-pointer text-start text-[15px] tracking-tight leading-tight mt-[16px] ml-[12px]  w-[136px] sm:w-[250px] underline'>{link}</li>
                        ))}
                    </ul>
                    <div className="language mt-8 ml-[12px]">
                        <div className="buttons">
                            <button onClick={langBtn} className='border-[1px] text-white border-white px-3 py-1 capitalize flex items-center gap-2 rounded bg-black/10'> <IoLanguageOutline /> {dropval}  <IoMdArrowDropdown /></button>
                            <div className={`selector text-center w-32 mt-1 bg-white rounded-xl ${dropHeight ? "block" : "hidden"} overflow-hidden`}>
                                <li onClick={langSelect} className='capitalize list-none font-bold my-1 hover:bg-blue-600 hover:text-white cursor-pointer'>english</li>
                                <li onClick={langSelect} className='capitalize list-none font-bold my-1 hover:bg-blue-600 hover:text-white cursor-pointer'>हिन्दी</li>
                            </div>
                            <div className="location mt-6">
                                <Link to="">
                                <p className='text-[#FFFFFFB3] leading-tighter cursor-pointer'>Netflix India</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer