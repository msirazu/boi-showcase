import { useLoaderData, useParams } from "react-router-dom";
import { addToLocalStorageDatabase, addToLocalStorageWishList } from "../../utilities/addToDatabase";

const BookDetails = () => {
    
    const booksData = useLoaderData();
    const { id } = useParams();
    const book = booksData.find(b => b.bookId === Number(id));
    const { bookName, author, tags, category, publisher, rating, review, totalPages, yearOfPublishing, image } = book;

    const handleReadList = (id) => {
        addToLocalStorageDatabase(id);
    }

    const handleWishList = (id) => {
        addToLocalStorageWishList(id);
    }

    return (
        <>
            <section className="m-5 lg:mx-0">
                <div className="lg:flex gap-10 max-w-292.5">
                    <div className="bg-gray-200 w-143 rounded-lg flex justify-center items-center">
                        <img className="max-w-70 max-h-110" src={image}/>
                    </div>
                    <div className="w-150">
                        <h1 className="font-bold font-play text-3xl sm:mt-5">{bookName}</h1>
                        <h6 className="mt-3">By: {author}</h6>
                        <hr className="border-dashed border-gray-400 my-5"></hr>
                        <h5>Category: {category}</h5>
                        <hr className="border-dashed border-gray-400 my-5"></hr>
                        <p className="font-work text-[16px]"><span className="font-bold">Review</span>: {review}</p>
                        <div>
                        <h6 className="mt-2 text-green-500">{`Tags: #${tags[0]} #${tags[1]}`}</h6>
                        </div>
                        <hr className="border-dashed border-gray-400 my-5"></hr>
                        <p>Number of Pages: {totalPages}</p>
                        <p className="my-2">Publisher: {publisher}</p>
                        <p>Year of Publishing: {yearOfPublishing}</p>
                        <p className="my-2">Rating: {rating}</p>
                        <div className="flex gap-5">
                        <button onClick={() => handleReadList(id)} className="btn capitalize">read</button>
                        <button onClick={() => handleWishList(id)} className="btn btn-primary capitalize">wishlist</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BookDetails;