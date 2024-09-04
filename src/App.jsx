import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';  // to perform rounting functionality
import HomePage from './Pages/HomePage/HomePage';
import UploadPage from './Pages/UploadPage/UploadPage';
import AnalysePage from './Pages/AnalysePage/AnalysePage';
import BarChart from "./Components/BarChart/BarChart";
import PieChart from './Components/PieChart/PieChart';
import LineChart from './Components/LineChart/LineChart';
import { DataProvider } from './DataContextProvider/DataContextProvider';  // to provide common data to all the children below this component

function App() {
  return (
    <div className='app-card '>
      <DataProvider >  {/* component provide response data to the child components */}
        <Routes>
         <Route path="/" element={<HomePage />}>  {/* Link to Home page a default Page  */}
            <Route index element={<HomePage />} />  
            <Route path="upload" element={<UploadPage />}></Route>
            <Route path="analyse" element={<AnalysePage />}>
              <Route path="barchart" element={<BarChart />}/>
              <Route path="piechart" element={<PieChart />}/>
              <Route path="linechart" element={<LineChart />}/>
            </Route>
          </Route>
        </Routes>
      </DataProvider>

    </div>
  );
}

export default App;
