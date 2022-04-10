import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';

import AllMeetupsPage from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<AllMeetupsPage />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/new-meetup' element={<NewMeetupPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
