import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getFromLocalStorage } from '../../utilities/addToDatabase';
import ReadBooksList from './ReadBooksList';
import { useEffect, useState } from 'react';

const BooksList = () => {
    const [sortType, setSortType] = useState('');
    const [readList, setReadList] = useState([]);

    const booksData = useLoaderData();

    useEffect(() => {
        const storedReadList = getFromLocalStorage();
    const convertedStoredReadList = storedReadList.map(b => Number(b))
    const readListData = booksData.filter(b => convertedStoredReadList.includes(b.bookId))
    setReadList(readListData);
    }, [booksData]);

    const handleSort = (type) => {
        setSortType(type);
        if (type === 'page') {
            const sortByPage = [...readList.sort((a, b) => a.totalPages - b.totalPages)];
            setReadList(sortByPage);
        } else if (type === 'rating') {
            const sortByName = [...readList.sort((a, b) => a.rating - b.rating)];
            setReadList(sortByName);
        }
    }

    return (
        <>
        <section className='my-5 text-center'>
            <details className="dropdown">
  <summary className="btn m-1">Sort by: {sortType}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={() => handleSort('page')}>Page</a></li>
    <li><a onClick={() => handleSort('rating')}>Rating</a></li>
  </ul>
</details>
        </section>
            <section className='mb-10'>
                     <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
        <div className=''>
      {readList.map(book => <ReadBooksList key={book.bookId} book={book}/>)}
        </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
            </section>
        </>
    );
};

export default BooksList;