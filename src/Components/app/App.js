import '../appHeader/AppHeader'
import AppHeader from '../appHeader/AppHeader';
import AppInfo from '../appInfo/AppInfo';
import AppButtons from '../appButtons/AppButtons';
import SaladItems from '../saladItems/SaladItems';
import CustomSalad from '../customSalad/CustomSalad';

function App() {
  return (
    <div className="app">
      <AppHeader/>
      <AppInfo/>
      <AppButtons/>
      <main>
        {/* <SaladItems/> */}
        <CustomSalad/>
      </main>
    </div>
  );
}

export default App;
