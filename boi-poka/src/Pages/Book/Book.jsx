// import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";


const Book = ({ singleBook }) => {


    const { image, bookName, author, rating, category, yearOfPublishing, tags, bookId } = singleBook;
    // const data = use(bookPromise);

    // console.log(singleBook);

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border p-6 ">
                <figure className="p-4 bg-gray-100 w-2/3 mx-auto rounded-xl" >
                    <img className="h-[166px]"
                        src={image}
                        alt="Shoes" />
                </figure>

                <div className="card-body">
                    <div className="flex justify-between " >
                        {
                            tags.map((tag, index) => {
                                return <button key={index} className="">{tag}</button>;
                            })
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>  By : {author}</p>
                    <div className="border-t border-dashed border-pink-300" >

                    </div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating}<FaStarHalfAlt />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;