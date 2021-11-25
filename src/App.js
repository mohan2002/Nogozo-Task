import './App.css';
import Banner from './Components/Banner';
import Classes from './Components/Classes';
import Featured from './Components/Featured';
import Featured2 from './Components/Featured2';
import Featured3 from './Components/Featured3';
import Novels from './Components/Novels';
import Navbar from './Navbarcomp/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Classes/>
      <Novels/>
      <Featured/>
      <Featured2/>
      <Featured3/>
    </div>
  );
}

export default App;
