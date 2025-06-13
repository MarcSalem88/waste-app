

import './App.css';
import Header from './Components/Header/Header';
import SelectSkip from './Pages/SelectSkip';

function App() {


  return (
    <div className="container-fluid ps-0" style={{ height: '100vh' }}>
      <div className="row h-100">
        <div className="col-2">
          <Header />

        </div>
        <div className="col-10">

          <SelectSkip />
        </div>
      </div>
    </div>
  );
}

export default App;
