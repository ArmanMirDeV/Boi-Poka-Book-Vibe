import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around items-center p-16 w-full m-auto ' >
            <div> 
                <h1>Lorem ipsum dolor sit amet consectetur.</h1> 
                <button className='btn-primary' >Test</button>
            </div>
            <div>
                <img className='w-3/12' src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;