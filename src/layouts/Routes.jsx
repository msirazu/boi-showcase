import LoadingColors from "../components/Loader/LoadingColors";
import About from "../pages/About/About";
import BookDetails from "../pages/Books/BookDetails";
import BooksList from "../pages/Books/BooksList";
import Home from "../pages/Home/Home";
import NotFound from '../pages/Not Found/NotFound';
import Root from "./Root";
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {path: '/', element: <Root />, HydrateFallback: () => {
            return <div className="flex justify-center items-center my-5"><LoadingColors /></div>},children: [
        {index: true, element: <Home />},
        {path: 'about', element: <About />},
        {path: '*', element: <NotFound />},
        {path: 'book-details/:id', element: <BookDetails />, loader: async() => {
            const booksRes = await fetch('/JSON/booksData.json');
            const booksData = await booksRes.json();
            return booksData;
        }},
        {path: 'listed-books', element: <BooksList />, loader: async() => {
            const booksRes = await fetch('/JSON/booksData.json');
            const booksData = await booksRes.json();
            return booksData;
        }}
    ]}
]);

export default router;