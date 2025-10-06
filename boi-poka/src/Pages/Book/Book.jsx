// import React, { use } from 'react';

const Book = ({ singleBook }) => {


    const {image, bookName, author} = singleBook;
    // const data = use(bookPromise);

    // console.log(singleBook);

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="p-3" >
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{author}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Book;