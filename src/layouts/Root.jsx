import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <>
            <section className='max-w-292.5 mx-auto'>
                <Header />
                <Outlet />
                <Footer />
            </section>
        </>
    );
};

export default Root;