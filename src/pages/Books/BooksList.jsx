import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getFromLocalStorage } from '../../utilities/addToDatabase';
import ReadBooksList from './ReadBooksList';

const BooksList = () => {
    const booksData = useLoaderData();
    const storedReadList = getFromLocalStorage();
    const convertedStoredReadList = storedReadList.map(b => Number(b))
    const readListData = booksData.filter(b => convertedStoredReadList.includes(b.bookId))
    return (
        <>
            <section className='my-10'>
                     <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
        <div className=''>
      {readListData.map(book => <ReadBooksList key={book.bookId} book={book}/>)}
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