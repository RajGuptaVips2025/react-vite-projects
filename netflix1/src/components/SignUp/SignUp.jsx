import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const submitHandler = (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            setError('Please fill in all fields');
            return;
        }

    };

    return (
        <>
            <Header />
            <div className="bgImage w-full h-screen leading-tight">
                <div className="w-full h-screen bg-black/50 flex items-center">
                    <div className="signupFiends mx-auto rounded w-[95%] max-w-[460px] px-16 py-12 bg-black/70 flex justify-center items-center flex-col">
                        <form onSubmit={submitHandler} className='flex flex-col gap-4 items-center justify-center'>
                            <h1 className='text-white w-full text-3xl font-semibold text-start mb-7'>Sign Up</h1>
                            <input
                                className='w-[300px] p-5 rounded bg-transparent border border-white text-white'
                                placeholder='Email or mobile number'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className='w-[300px] p-5 rounded bg-transparent border border-white text-white'
                                placeholder='password'
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error && <p className='text-red-500'>{error}</p>}
                            <Link to="/movies">
                                <button className='w-[300px] p-2 rounded bg-[#e50914] font-semibold text-white'>Sign Up</button>
                            </Link>
                            <p className='text-[#FFFFFFDD]'>OR</p>
                            <button className='w-[300px] p-2 rounded bg-[#424242]/50 font-semibold hover:bg-[#313131] text-white'>Use a sign-in code</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;
