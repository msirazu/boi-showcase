import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const books = useLoaderData();
    const {bookId, bookName, author, image, tags, category, publisher, rating, yearOfPublishing, review} = books;
    return (
        <section>
            <div>
                <h2>{bookName}</h2>
                <p>{review}</p>
            </div>
        </section>
    );
};

export default SingleBook;