import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => (
    <div className="layout">
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
);

export default Layout;
