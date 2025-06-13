import './App.css';
import Header from './Components/Header/Header';
import SelectSkip from './Pages/SelectSkip';

function App() {


  return (
    <div className="container-fluid ps-0" style={{ height: '100dvh', minHeight: '100dvh', overflow: 'hidden' }}>
      <div className="row h-100" style={{ height: '100%', minHeight: '100%' }}>
        <div className="col-2" style={{ height: '100%', minHeight: '100%', overflow: 'hidden' }}>
          <Header />
        </div>
        <div className="col-10 d-flex flex-column" style={{ height: '100%', minHeight: '100%', overflow: 'hidden' }}>
          <div className="flex-grow-1 d-flex flex-column" style={{ height: '100%', minHeight: '100%', overflow: 'hidden' }}>
            <SelectSkip />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
