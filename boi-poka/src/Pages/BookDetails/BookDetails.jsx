import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();
    const bookID = parseInt(id)

    const singleBook = data.find(book => book.bookId === bookID)


    const { bookName, image, } = singleBook;



    return (
        <div className=' w-2/3 mx-auto' >
            <h1>
                <img className='w-48' src={image} alt="" />
                <p>{bookName}</p>

                <button className="btn btn-accent m-2">Read</button>
                <button className="btn btn-info m-2">WishList</button>

            </h1>
        </div>
    );
};

export default BookDetails;