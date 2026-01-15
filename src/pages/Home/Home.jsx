import { useEffect, useState } from "react";
import HeroSection from "../../components/Banner/HeroSection";
import HomeBookList from "../Books/HomeBookList";

const Home = () => {
    const [booksData, setBooksData] = useState([]);
    useEffect(() => {
        const booksPromise = async() => {
            const booksRes = await fetch('JSON/booksData.json');
            const data = await booksRes.json();
            setBooksData(data);
        }
        booksPromise();
    }, []);
    return (
        <>
        <section className="">
            <div>
                <HeroSection />
            </div>
            <div>
                <h3 className="capitalize font-bold text-3xl playfair-display text-center my-5">books</h3>
            </div>
        </section>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:p-0 sm:mx-5 md:mx-0 lg:mx-5 mb-5">
                {booksData.map(book => <HomeBookList book={book} key={book.bookId}/>)}
            </div>
        </section>
        </>
    );
};

export default Home;