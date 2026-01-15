import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const HomeLayout = () => {
    return (
            <div className='max-w-292.5 mx-auto'>
                <header>
                    <Header />
                </header>
                <main>
                    <Outlet />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
    );
};

export default HomeLayout;