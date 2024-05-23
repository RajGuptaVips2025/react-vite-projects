import { useEffect, useState } from 'react'
import Row from '../Rows/Row';
import { Link } from 'react-router-dom';
import logo from '../../logo.png'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoLanguageOutline } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { getNowPlaying, getPopular, getTopRated, getUpcoming } from '../../app/movieSlice';
import BackGroundPlay from '../BackGroundPlay/BackGroundPlay';

const ShowMovies = () => {
    const [dropHeight, setDropHeight] = useState(false);
    const [dropval, setDropval] = useState("english")
    const langBtn = () => {
        setDropHeight(prev => !prev);

    }
    const langSelect = (e) => {
        setDropval(e.target.outerText)
        setDropHeight(prev => !prev);
    }

    const dispatch = useDispatch()
    async function hello() {
        const apiKey = '7e5122f42b3d47b2f9c1deaf4e1d2214';
        const response1 = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`);
        const response2 = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
        const response3 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`);
        const response4 = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();
        const data4 = await response4.json();
        dispatch(getUpcoming(data1.results))
        dispatch(getPopular(data2.results))
        dispatch(getTopRated(data3.results))
        dispatch(getNowPlaying(data4.results))
    }

    useEffect(() => {
        hello();
    }, [])

    const movies = useSelector((state) => state.movie)
    return (
        <>
            <div className="main bg-black min-h-screen">
                <nav className='min-w-full absolute p-5'>
                    <div className='flex justify-between items-center mx-auto sm:w-4/5'>
                        <div className="logo">
                            <Link to="/">
                                <img className='sm:w-[150px] md:w-[150px] w-[20vw]' src={logo} alt="" />
                            </Link>
                        </div>
                        <div className="nav_right flex gap-6 items-center sm:mr-5">
                            <div className="buttons">
                                <button onClick={langBtn} className='border-[1px] text-white border-white px-3 py-1 capitalize flex items-center gap-2 rounded bg-black/10'> <IoLanguageOutline /> {dropval}  <IoMdArrowDropdown /></button>
                                <div className={`selector text-center bg-white rounded-xl ${dropHeight ? "block" : "hidden"} overflow-hidden`}>
                                    <li onClick={langSelect} className='capitalize list-none font-bold my-1 hover:bg-blue-600 hover:text-white cursor-pointer'>english</li>
                                    <li onClick={langSelect} className='capitalize list-none font-bold my-1 hover:bg-blue-600 hover:text-white cursor-pointer'>हिन्दी</li>
                                </div>
                            </div>
                            <div className="sign_up">
                                <Link to="/signUp" >
                                    <button className='bg-[rgba(229,9,20)] hover:bg-[#c11119] text-white px-4 text-sm py-[5.2px] rounded font-bold'>Log Out</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="mainBox w-[100%]">
                    <BackGroundPlay />
                    <div className="moviesRows -mt-[150px]">
                        <Row title="upcoming" movies={movies.upcoming} />
                        <Row title="now playing" movies={movies.nowPlaying} />
                        <Row title="Popular" movies={movies.popular} />
                        <Row title="top rated" movies={movies.topRated} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowMovies
