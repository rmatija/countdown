
import './App.css';
import Timer from './components/timer/index.js';

const title = "Timer";

const App = () => {

  return (
    <div className="App">
      <div>
        <nav className="app-header layout-row align-items-center justify-content-center">
          <div className="layout-row align-items-center">
            <h4 id="app-title" data-testid="app-title" className="app-title">{title}</h4>
          </div>
        </nav>
        <Timer />
      </div>
    </div>
  );
}

export default App;
