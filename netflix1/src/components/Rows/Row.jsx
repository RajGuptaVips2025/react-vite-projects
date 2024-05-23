import React from 'react';
import Card from '../Cards/Card';

const Row = ({ title, movies }) => {
    return (
        <div className="mainRow">
            <div className="movies mx-2 mt-8">
                <div className="titleRow m-2 ">
                    <h1 className='text-white text-[28px] sm:text-[45px] text-start capitalize' >{title}</h1>
                </div>
                <div className=" flex overflow-x-auto overflow-y-hidden no-scrollbar cursor-pointer">
                    <div className="card flex items-center">
                        {movies && movies.map((movie) => (<Card key={movie.id} movie={movie} />))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Row;
