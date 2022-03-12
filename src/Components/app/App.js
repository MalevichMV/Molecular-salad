import '../appHeader/AppHeader'
import AppHeader from '../appHeader/AppHeader';
import AppInfo from '../appInfo/AppInfo';
import AppButtons from '../appButtons/AppButtons';
import SaladItems from '../saladItems/SaladItems';
import CustomSalad from '../customSalad/CustomSalad';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader/>
        <AppInfo/>
        <AppButtons/>
        <main>
          <Routes>
            <Route path='/' element={<SaladItems/>}/>
            <Route path='/custom-salad' element={<CustomSalad/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
