import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const booksData = useLoaderData();
    const { id } = useParams();
    const book = booksData.find(b => b.bookId === Number(id));
    const { bookName, author, tags, category, publisher, rating, review, totalPages, yearOfPublishing, image } = book;
    return (
        <>
            <section className="m-5 lg:mx-0">
                <div className="lg:flex gap-10 w-292.5 h-178">
                    <div className="bg-gray-200 w-143 rounded-lg flex justify-center items-center">
                        <img className="w-70 h-110" src={image}/>
                    </div>
                    <div className="w-[60%]">
                        <h1 className="font-bold font-play text-3xl">{bookName}</h1>
                        <hr className="border-dashed border-gray-400 my-5"></hr>
                        <p className="font-work text-[16px]"><span className="font-bold">Review</span>: {review}</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BookDetails;