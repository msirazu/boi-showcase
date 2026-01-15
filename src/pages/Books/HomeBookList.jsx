import { Link } from "react-router-dom";

const HomeBookList = ({ book }) => {
    const { bookName, image, author, tags, category, rating, bookId } = book;
    return (
        <>
            <Link to={`/book-details/${bookId}`}>
            <div className="border border-gray-300 rounded-lg p-5 cursor-pointer hover:shadow-xl">
                <div className="flex justify-center bg-gray-100 rounded-lg p-10">
                    <img className="w-30 h-50" src={image}/>
                </div>
                <div className="">
                <div className="flex justify-between my-2">
                    <p>{`Tag: #${tags[0]}`}</p>
                    <p>{`#${tags[1]}`}</p>
                </div>
               <h2 className="font-play font-bold text-2xl truncate">{bookName}</h2>
               <h5 className="my-2">By: {author}</h5>
               <hr className="border-dashed border-gray-300 my-3"></hr>
               <div className="flex justify-between">
                <h4>Category: {category}</h4>
                <h4>Rating: {rating}</h4>
               </div>
                </div>
            </div>
            </Link>
        </>
    );
};

export default HomeBookList;