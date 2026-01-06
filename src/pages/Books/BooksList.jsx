import { NavLink } from 'react-router-dom'

const BooksList = ({ book }) => {
    const {bookId, bookName, author, image, tags, category, publisher, rating, yearOfPublishing} = book;
    return (
        <section>
            <div className="border border-gray-300 p-5 rounded-lg mb-4 flex flex-col">
                <div>
                    <img className="w-25 h-35" src={image}/>
                </div>
                <div>
                    <h2 className="mt-5 font-play font-bold text-xl">{bookName}</h2>
                    <h6>by: {author}</h6>
                    <div className="">
                        <h6>tag: #{tags}</h6>
                        <p>year of publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <NavLink to={`/books/${bookId}`}><button className='btn mt-5 capitalize'>view details</button></NavLink>
            </div>
        </section>
    );
};

export default BooksList;