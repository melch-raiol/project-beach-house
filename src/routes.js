import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Book from './pages/Book';
import Apartments from './pages/Apartments';
import Main from './pages/Main';

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Book' element={<Book />} />
            <Route path='/Apartments' element={<Apartments />} />
        </Routes>
    )
}

export default MainRoutes;