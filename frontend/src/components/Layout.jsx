import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main style={{ marginTop: 'var(--navbar-height)' }}>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;
