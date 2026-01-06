import { useLoaderData } from 'react-router-dom';
import BooksList from './BooksList';

const Books = () => {
    const allBooks = useLoaderData();
    return (
        <section className='m-4'>
            <div className='my-5 bg-gray-200 rounded-lg p-5'>
                <h1 className='text-center capitalize font-bold text-2xl'>books</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                {allBooks.map(book => <BooksList key={book.bookId} book={book}/>)}
            </div>
        </section>
    );
};

export default Books;