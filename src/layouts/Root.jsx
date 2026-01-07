import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <>
            <section className='max-w-292.5 mx-auto'>
                <header>
                    <Header />
                </header>
                <main>
                    <Outlet />
                </main>
                <footer>
                    <Footer />
                </footer>
            </section>
        </>
    );
};

export default Root;