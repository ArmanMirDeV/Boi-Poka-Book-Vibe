import React from 'react';
import bookImage from '../../assets/pngwing1.png'

const Banner = () => {
    return (
        <div className=" bg-base-200 p-12 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bookImage}
      className="rounded-lg shadow-2xl"
    />
    <div  >
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      
      <button className="btn bg-green-600 mt-8">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;