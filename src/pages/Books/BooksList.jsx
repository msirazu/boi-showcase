import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getFromLocalStorage, getWishListFromLocalStorage, removeReadFromLocaStorage, removeWishFromLocalStorage } from '../../utilities/addToDatabase';
import ReadBooksList from './ReadBooksList';
import { useEffect, useState } from 'react';
import WishBooksList from './WishBooksList';
import { sortList } from '../../utilities/sortBy';
import { toast } from 'react-toastify';

const BooksList = () => {
    const [sortType, setSortType] = useState('');
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [activeTab, setActiveTab] = useState('read');

    const booksData = useLoaderData();

    useEffect(() => {
    const readPromise = async() => {
    const storedReadList = getFromLocalStorage();
    const convertedStoredReadList = storedReadList.map(b => Number(b))
    const readListData = booksData.filter(b => convertedStoredReadList.includes(b.bookId))
    setReadList(readListData);
    }
    readPromise();
    }, [booksData]);

    useEffect(() => {
        const wishPromise = async() => {
        const storedWishList = getWishListFromLocalStorage();
        const convertedStoredWishList = storedWishList.map(b => Number(b));
        const wishListData = booksData.filter(b => convertedStoredWishList.includes(b.bookId));
        setWishList(wishListData);
        }
        wishPromise();
    }, [booksData]);

    const handleReadDelete = (id) => {
        removeReadFromLocaStorage(id);
        toast.success('remove successfully');
    }

    const handleWishDelete = (id) => {
        removeWishFromLocalStorage(id);
        toast.success('remove successfully');
    }

    const handleSort = (type) => {
        setSortType(type);
        if (activeTab === 'read') {
            setReadList(sortList(readList, type));
        } else {
            setWishList(sortList(wishList, type));
        }
    }

    return (
        <>
        <section className='my-5 text-center'>
            <details className="dropdown">
  <summary className="btn m-1">Sort by: {sortType || 'select'}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={() => handleSort('page')}>Page</a></li>
    <li><a onClick={() => handleSort('rating')}>Rating</a></li>
  </ul>
</details>
        </section>
            <section className='mb-10'>
                     <Tabs onSelect={(index) => {
    if (index === 0) setActiveTab('read');
    if (index === 1) setActiveTab('wish');
  }}>
        <div className='mx-5 xl:mx-0'>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>
        </div>                    

    <TabPanel>
        <div className='lg:mx-5 xl:mx-0'>
      {readList.map(book => <ReadBooksList key={book.bookId} book={book} handleReadDelete={handleReadDelete}/>)}
        </div>
    </TabPanel>
    <TabPanel>
      <div className='lg:mx-5 xl:mx-0'>
        {wishList.map(book => <WishBooksList key={book.bookId} book={book} handleWishDelete={handleWishDelete}/>)}
      </div>
    </TabPanel>
  </Tabs>
            </section>
        </>
    );
};

export default BooksList;