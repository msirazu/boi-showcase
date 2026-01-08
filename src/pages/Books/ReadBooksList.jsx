import { NavLink } from "react-router-dom";

const ReadBooksList = ({ book }) => {
    const { bookName, author, tags, category, publisher, rating, bookId, totalPages, yearOfPublishing, image } = book;
    return (
        <>
            <section className="flex gap-10 border border-gray-300 p-5 rounded-lg my-4">
                <div className="bg-gray-300 w-[25%] flex justify-center items-center p-10 rounded-lg">
                    <img className="w-20 h-35" src={image}/>
                </div>
                <div className="w-[75%]">
                    <h2 className="font-play font-bold text-2xl mb-2">{bookName}</h2>
                    <h5>By: {author}</h5>
                    <div className="flex gap-10 my-2">
                        <div>
                            <p>{`Tag: #${tags[0]} #${tags[1]}`}</p>
                        </div>
                        <div>
                            <p>Year of Publishing: {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div>
                            <p>Publisher: {publisher}</p>
                        </div>
                        <div>
                            <p>Page: {totalPages}</p>
                        </div>
                    </div>
                    <hr className="border-dashed border-gray-400 my-4"></hr>
                    <div className="flex gap-10 items-center">
                        <div className="bg-[#E0EEFF] py-2 px-5 rounded-full">
                            <h6>Category: {category}</h6>
                        </div>
                        <div className="bg-[#FFF3E1] py-2 px-5 rounded-full">
                            <p>Rating: {rating}</p>
                        </div>
                        <div>
                            <NavLink to={`/book-details/${bookId}`}>
                            <button className="btn capitalize bg-[#14A70B] text-white rounded-full">view details</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ReadBooksList;