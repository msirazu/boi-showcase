import LoadingColors from "../components/Loader/LoadingColors";
import About from "../pages/About/About";
import Books from "../pages/Books/Books";
import SingleBook from "../pages/Books/SingleBook";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import NotFound from "../pages/Not Found/NotFound";
import Root from "./Root";
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
    {path: '/', errorElement: <ErrorPage />, element: <Root />, children: [
        {index: true, element: <Home />},
        {path: 'about', element: <About />},
        {path: 'books', loader: async() => {
            const bookRes = await fetch('/JSON/booksData.json');
            return bookRes;
        }, element: <Books />, HydrateFallback: () => {
            return <div className="flex justify-center items-center my-5"><LoadingColors /></div>}},
        {path: '*', element: <NotFound />},
        {path: 'books/:bookId', element: <SingleBook />, loader: async({params}) => {
            const res = await fetch('/JSON/booksData.json');
            const books = await res.json();
            const book = books.find(
                (p) => String(p.bookId) === params.bookId);
            if (!book) {
                throw new Response('book not found', {status: 404})
            }
            return book;
        }, HydrateFallback: () => {
            return <div className="flex justify-center items-center my-5"><LoadingColors /></div>}},
        {path: '*', element: <NotFound />}
    ]}
]);

export default router;