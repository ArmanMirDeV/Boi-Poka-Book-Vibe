import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utilities/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal)

const BookDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();
    const bookID = parseInt(id)

    const singleBook = data.find(book => book.bookId === bookID)


    const { bookName, image, author, category, review, totalPages, publisher, yearOfPublishing, rating, tags } = singleBook;


    const handleMarkAsRead = (id) => {

        // store with id 
        // where to store 
        // array of collection 
        // if book already exist then show an alert 
        // if book doesn't exist then push to the collection array


        /*     const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Added successfully ✅ "
            }); */


        toast("Added SuccessFully");
        addToStoredDB(id);

    }


    return (
        <div className=" grid grid-cols-1 lg:grid-cols-2  bg-base-100 shadow-sm">
            <figure >
                <img className='h-[564px] w-[425px] object-contain'
                    src={image}
                    alt={bookName} />
            </figure>
             <ToastContainer />
            <div className="card-body">
                <h2 className="card-title text-4xl">{bookName}</h2>
                <p>By : {author}</p>
                <p className='font-bold text-xl text-pink-300' >{category}</p>
                <p><span className='font-bold ' > Review:</span>  {review}</p>
                <div className='flex gap-4 ' >
                    <div>
                        <p className='font-bold'>Tag: </p>
                    </div>
                    <div className='flex gap-4' >
                        {
                            tags.map((tag, index) => {
                                return <button key={index} className="text-green-500">{tag}</button>;
                            })
                        }
                    </div>
                </div>
                <div className='flex gap-12'>

                    <div>
                        <p>Number of Pages: </p>
                        <p>Publisher: </p>
                        <p>Year of Publishing: </p>
                        <p>Rating: </p>
                    </div>
                    <div className='font-bold'>
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className="card-actions mt-2 gap-3">
                    <button onClick={() => handleMarkAsRead(id)} className="btn">Mark as Read</button>
                    <button className="btn btn-info">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;