import React, { useEffect, useState } from 'react'
import "./analysePage.css"
import {  Outlet, useNavigate } from 'react-router-dom'  
import { useDataContext } from "../../DataContextProvider/DataContextProvider"  // to access Api Response Data 
import Filter from '../../Components/Filter/Filter'
import BarChartLogo from "../../assests/Logo/bar-chart.png"
import PieChartLogo from "../../assests/Logo/pie-chart.png"
import LineChartLogo from "../../assests/Logo/line-chart.png"
const AnalysePage = () => {
  const navigator = useNavigate()  // to navigate to othe page and also send data 
  const {isLoading} = useDataContext()  // access Api response Labels and isLoading 
  const [chartSelection , setChartSelection] = useState([])  // Store the Chart selected by the user
  useEffect(() =>{
    if(chartSelection === "Bar chart" ){
      navigator("/analyse/barchart") // navigate to barchart page along withe label data
    }else if(chartSelection === "Pie chart"){
      console.log(chartSelection )
     navigator("/analyse/piechart")  // navigate to Pie Chart page along withe label data
    }else if(chartSelection === "Line chart"){
      navigator("/analyse/linechart" ,{state:{ xLabels : null,yLabels :null}})  // navigate to Line Chart page along withe label data
    }
    // eslint-disable-next-line 
  },[isLoading,chartSelection])  // run the useEffect when the given variable changed
  return (
    <div className=' analyse-page'>  {/* Outer Card */}
      <div className='h-12 analyse-nav pb-0.5 pt-1 pr-2 flex justify-start items-center'> {/* Container for Analyse Navbar which contains Chart Selection , Xlabel Selection and YLabel Selection */}
        <div className='ml-1 w-3/12 md:w-2/12 rounded flex gap-2'>
          <div className='bar-chart-logo-card h-5 w-5 md:h-10 md:w-9 p-0.5'>
            <img src={BarChartLogo} alt="Bar" className='chart-logo'
              onClick={() => setChartSelection("Bar chart")} 
            />
          </div>
          <div className='bar-chart-logo-card h-5 w-5 md:h-6 md:w-9 p-0.5'>
            <img src={PieChartLogo} alt="Pie" className='chart-logo' 
              onClick={() => setChartSelection("Pie chart")} 
            />
          </div>
          <div className='bar-chart-logo-card h-5 w-5 md:h-6 md:w-9 p-0.5'>
            <img src={LineChartLogo} alt="Line" className='chart-logo' 
              onClick={() => setChartSelection("Line chart")}
            />
          </div>
        </div>
      </div>
      <div className=' h-12 md:hidden bg-gray-50'>
        <Filter chartSelection={chartSelection}/>
      </div>
      <div className=' analyse-bottom-card flex justify-center md:justify-start h-full '> 
        <div className=' analyse-chart-card flex md:justify-center md:items-center'>  {/* Container to display the child component of analyse page like charts */}
          <Outlet />
        </div>
        <div className=' hidden md:block analyse-filter-container bg-gray-50'>
          <Filter chartSelection={chartSelection}/>
        </div>
      </div>
    </div>
  )
}
export default AnalysePage