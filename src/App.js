import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import ContactList from './pages/ContactList';
import ContactSharedLayout from './pages/ContactSharedLayout';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />

            <Route path='contact' element={<ContactSharedLayout />}>
              <Route index element={<Contact />} />
              <Route path=':department' element={<ContactList />} />
            </Route>
            
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
