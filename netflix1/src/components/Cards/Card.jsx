import React from 'react'

const Card = ({movie}) => {
  const tmdb_img_url="https://image.tmdb.org/t/p/w500";
  return (
    <>
    <div className='w-32 sm:w-48 flex mx-2 duration-150 overflow-hidden hover:scale-105' >
        <img className='object-cover' src={`${tmdb_img_url}/${movie.poster_path}`} alt="" /></div></>
  )
}

export default Card