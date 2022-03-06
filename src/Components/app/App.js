import '../appHeader/AppHeader'
import AppHeader from '../appHeader/AppHeader';
import AppInfo from '../appInfo/AppInfo';
import AppButtons from '../appButtons/AppButtons';
import SaladItems from '../saladItems/SaladItems';

function App() {
  return (
    <div className="app">
      <AppHeader/>
      <AppInfo/>
      <AppButtons/>
      <main>
        <SaladItems/>
      </main>
    </div>
  );
}

export default App;
