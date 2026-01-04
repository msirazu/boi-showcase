import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Root from "./Root";
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
    {path: '/', element: <Root />, children: [
        {index: true, element: <Home />},
        {path: 'about', element: <About />},
    ]}
]);

export default router;