import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredBook } from '../../Utilities/addToDB';
import Book from '../Book/Book';


const ReadList = () => {

    const [readList, setReadList] = useState([])

    const data = useLoaderData();

    useEffect(() => {
        const storedBookData = getStoredBook();

        const convertedStoredBooks = storedBookData.map(id => parseInt(id));

        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));

        setReadList(myReadList);

    }, [])

    return (




        <div>

            <div className="tabs tabs-box">
                <input type="radio" name="my_tabs_6" className="tab" aria-label="Read Books" />
                <div className="tab-content bg-base-100 border-base-300 p-6">


                    Read Books: {readList.length}

                    <div className='grid  grid-cols-1 md:grid-cols-2  mt-4 justify-center gap-3' >
                        {
                            readList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
                        }
                    </div>
                </div>

                <input type="radio" name="my_tabs_6" className="tab" aria-label="Wishlist Books" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    Wishlist Books

                </div>
            </div>
        </div>
    );
};

export default ReadList;