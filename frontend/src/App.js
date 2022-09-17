import logo from './logo.svg';
import './App.css';
import DataFetch from './component/DataFetch';
import DataFetch2 from './component/DataFetch2';
import ApexChart from './component/ApexChart';
import PieChart from './component/PieChart';
import Nav from './component/Nav';

function App() {
  return (
    <div className='App'>
      <Nav />
      <DataFetch />
      <DataFetch2 />
      <DataFetch />
      <DataFetch />
      <ApexChart />
    </div>
  );
}

export default App;
