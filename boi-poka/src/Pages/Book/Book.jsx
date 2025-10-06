// import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";


const Book = ({ singleBook }) => {


    const { image, bookName, author, rating, category } = singleBook;
    // const data = use(bookPromise);

    // console.log(singleBook);

    return (
        <div className="card bg-base-100 w-96 shadow-sm border p-6">
            <figure className="p-4 bg-gray-100 w-2/3 mx-auto rounded-xl" >
                <img className="h-[166px]"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className=" ml-8 mt-3 flex gap-10 text-green-600" >
                <p>Young Adult</p>
                <p>Identity</p>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>  By : {author}</p>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating}<FaStarHalfAlt />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;