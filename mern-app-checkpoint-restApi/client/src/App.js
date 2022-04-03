import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';

import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/AddContact" element={<AddContact />} />
        <Route path="/EditContact/:id" element={<EditContact  />} />
      </Routes>
    </div>
  );
}

export default App;
