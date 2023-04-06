import { Route, Routes } from 'react-router-dom';
import Whatsapp from './components/Whatsapp';
import AboutUs from './pages/AboutUs';
import Apartments from './pages/Apartments';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Main from './pages/Main';

function MainRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/AboutUs' element={<AboutUs />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Book' element={<Book />} />
                <Route path='/Apartments' element={<Apartments />} />
            </Routes>
            <Whatsapp />
        </>
    )
}

export default MainRoutes;