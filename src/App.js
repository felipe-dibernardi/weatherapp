import './App.css';
import Button from './components/Button/Button';
import { faPlus, faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Button icon={faBars}/>
        <div className="local">Localização</div>
        <Button icon={faPlus} />
      </div>
      <div className="content">

      </div>
    </div>
  );
}

export default App;
