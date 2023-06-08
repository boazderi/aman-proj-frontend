import {Routes, HashRouter as Router, Route} from 'react-router-dom'

import ContactList from './views/ContactList'
import CallHistory from './views/CallHistory'
import HomePage from './views/HomePage'
import Header from './components/Header'

function App() {

  return (
    <Router>
      <section className='app-container'>
        <Header />
      <section className='main-container'>
        <Routes>
          <Route path='/contacts' element={<ContactList />} />
          <Route path='/history' element={<CallHistory />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </section>
      </section>
    </Router>
  );
}

export default App;
