import { useState } from 'react'
import AddSvg from '../../assets/add.svg'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

function Question() {
    const [email, setEmail] = useState("")
    const submitBtn = (e) => {
        e.preventDefault();
        setEmail("")
    }
    const questions = [
        { "What is Netflix?": `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br/>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price.There's always something new to discover, and new TV shows and movies are added every week!` },
        { "How much does Netflix cost?": "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts." },
        { "Where can I watch?": `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.${<br /> * 2}You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.` },
        { "How do I cancel?": "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." },
        { "What can I watch on Netflix?": "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." },
        { "Is Netflix good for kids?": `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.${<br /> * 2}Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.` }
    ]
    const [infoContainer, setInfoContainer] = useState(null);

    const showInfo = (index) => {
        if (infoContainer === index) {
            setInfoContainer(null);
        } else {
            setInfoContainer(index);
        }
    };

    return (
        <>
            <div className="row w-full bg-black border-t-[10px] border-[#232323] ">
                <div className="Box text-white flex justify-center items-center flex-col py-16">
                    <div className="Heading">
                        <h1 className='text-[30px] md:text-[48px] text-center sm:text-[35px] font-bold'>Frequently Asked Questions</h1>
                    </div>
                    <div className="questions my-2">
                        {questions.map((questionObj, index) => (
                            <div key={index}>
                                {Object.entries(questionObj).map(([question, answer]) => (
                                    <div key={question}>
                                        <div onClick={() => showInfo(index)} className="cursor-pointer hover:bg-[#414040] duration-200 text-[18px] sm:text-[25px] bg-[#333333] mt-3 px-6 py-5 question flex justify-between items-center w-[88vw] md:w-[75vw] sm:w-[90vw]">
                                            <p>{question}</p>
                                            <div className="image"><img src={AddSvg} className={`w-8 duration-150 ${infoContainer === index ? "rotate-45" : "rotate-0"}`} alt="" /></div>
                                        </div>
                                        <div className="info bg-[#333333] mt-[2px] w-[88vw] md:w-[75vw] sm:w-[90vw]">
                                            <p className={`content text-[18px] sm:text-[26px] p-8 text-start tracking-tight ${infoContainer === index ? "block" : "hidden"}`}>
                                                {answer}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="againLogin mt-8 text-white">
                        <p className='mx-8 text-[18px] text-center sm:text-[22px]'>Ready to watch? Enter your email or mobile number to create or restart your membership.</p>
                        <div className="login-detail flex items-center flex-wrap justify-center gap-4 mt-4">
                            <div className="inputBtn">
                                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email or mobile number' className='sm:w-[25vw] w-[65vw] outline-none text-white border-[1px] border-white px-6 py-[18px] rounded bg-black/40 ' />
                            </div>
                            <div className="loginBtn">
                                <Link to="/movies">
                                <button className='bg-[rgba(229,9,20)] hover:bg-[#c11119] duration-150 rounded text-white px-4 py-3 w-2/1 flex items-center sm:text-3xl text-xl m-2'>Get Started <IoIosArrowForward /> </button>
                                </Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Question