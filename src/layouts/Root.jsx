import { Outlet } from 'react-router'
import Header from '../components/Header/Header';
import Footer from '../pages/Footer/Footer';

const Root = () => {
    return (
        <>
            <section className='max-w-400 mx-auto'>
                <Header />
                <Outlet />
                <Footer />
            </section>
        </>
    );
};

export default Root;