import logo from './logo.svg';
import './App.css';
import DataFetch from './component/DataFetch';
import DataFetch2 from './component/DataFetch2';
import ApexChart from './component/ApexChart';
import PieChart from './component/PieChart';
import Nav from './component/Nav';
import Company from './component/Company';
import AllCompanies from './component/AllCompanies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Company />} />
          <Route path='/allcompanies' element={<AllCompanies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

{
  /* <Nav /> */
}
{
  /* <DataFetch />
        <DataFetch2 />
        <DataFetch />
        <DataFetch />
        <ApexChart /> */
}
{
  /* <DataFetch2 /> */
}
{
  /* <Company /> */
}
{
  /* <AllCompanies /> */
}
