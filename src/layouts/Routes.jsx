import LoadingColors from "../components/Loader/LoadingColors";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Root from "./Root";
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {path: '/', element: <Root />, HydrateFallback: () => {
            return <div className="flex justify-center items-center my-5"><LoadingColors /></div>},children: [
        {index: true, element: <Home />},
        {path: 'about', element: <About />},
    ]}
]);

export default router;