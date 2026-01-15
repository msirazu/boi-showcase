import LoadingColors from "../components/Loader/LoadingColors";
import About from "../pages/About/About";
import BookDetails from "../pages/Books/BookDetails";
import BooksList from "../pages/Books/BooksList";
import Home from "../pages/Home/Home";
import NotFound from '../pages/Not Found/NotFound';
import HomeLayout from "../layouts/HomeLayout";
import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from "../layouts/AuthLayout";
import AuthHome from "../pages/Home/AuthHome";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";

const router = createBrowserRouter([
    {path: '/', element: <HomeLayout />, HydrateFallback: () => {
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
    ]},
    {path: 'auth', element: <AuthLayout/>, children: [
        {path: '', element: <AuthHome/>},
        {path: 'login', element: <Login/>},
        {path: 'register', element: <Register/>},
    ]}
]);

export default router;