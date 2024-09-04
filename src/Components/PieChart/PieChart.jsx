import React, { useEffect, useState } from "react";
import "./piechart.css"

import { useDataContext } from "../../DataContextProvider/DataContextProvider";  // to get Data from context provider

// Import necessary components and function required for Pie chart from chart.js
import { Chart , ArcElement,Legend,Tooltip } from "chart.js"; // import Pie chart 
import {Pie} from "react-chartjs-2"

// register the components to Chart
Chart.register(ArcElement,Legend,Tooltip);

const PieChart = () => {

    const {responseData  , isLoading,xLabels} = useDataContext(); // access Api response data from Context Provider
   
    const [pieChartLabel,setPieChartLabel] = useState([]);  // Get the Pie Chart Selected Label
    const [pieChartDataset,setPieChartDataset] = useState([])  // Get the Dataset of the selected Label
   
    useEffect(() =>{
        if(responseData.length !==0){  
            let similarValues = {}   // object to store the repeated value for once
            if(xLabels){            // If label selected
              responseData.forEach(e => {       // traverse through the response data to get the values 
                if(Object.getOwnPropertyNames(similarValues).includes(e[xLabels])){  // if the value already present in the similarValues object increase the count to one for that value 
                    similarValues[e[xLabels]] = similarValues[e[xLabels]] + 1
                }else{        // If not present, initaily add the count as 1
                    similarValues[e[xLabels]] = 1
                }
            })
            const sortedEntries = Object.entries(similarValues).sort(([keyA], [keyB]) => {  // sort the object based on the values 
                return keyA.localeCompare(keyB);  
            });
            
            let label =[]   // values as labels
            let dataset = []  // count as values for Pie Chart 
            
            sortedEntries.forEach(e => {  // extract each label and dataset
              label.push(e[0])
              dataset.push(e[1])
            })
            setPieChartLabel(label)  // store it in the varaibales 
            setPieChartDataset(dataset)
            }
        }
         // eslint-disable-next-line 
  },[isLoading,xLabels])

  //options for pie chart
  const options={
    responsive:true,
    plugins:{
      legend:{
        position:'bottom',
         labels:{
          boxWidth : 20,
          boxHeight:5,
        }
      },
      title:{
        display:true,
        text:'Sample Data'
      }
    },
       
  }

  // data for the pie chart
  const Data = {
    labels:pieChartLabel,   // Extracted values (without repeating values)
    datasets: [
      {
        label: xLabels,  // selected x label
        data: pieChartDataset,  // count of each values
        backgroundColor:pieChartDataset.map((e, idx) => {  // for color purpose
          const hue = (idx * 40) % 360; 
          const saturation = 50 + (e * 5); 
          const lightness = 70 + (idx % 2 === 0 ? 15 : -5); 
          return `hsla(${hue}, ${saturation}%, ${lightness}%, 0.6)`; 
        }),
        borderColor: pieChartDataset.map((e, idx) => {
          const hue = (idx * 40) % 360; 
          const saturation = 60 + (e * 5); 
          const lightness = 60 + (idx % 2 === 0 ? 10 : -10); 
          return `hsla(${hue}, ${saturation}%, ${lightness}%, 1)`; 
        }),
        borderWidth: 1,
      },
      
    ],
  };

  const handleResize = ()=>{
    if(window.innerWidth > 800){
      Chart.defaults.font.size=10
  
      
    }else if(window.innerWidth < 700 && window.innerWidth > 500){
      Chart.defaults.font.size=7
     
    }else if(window.innerWidth < 500){
      Chart.defaults.font.size=5
    
    }
  
    Chart.defaults.font.lineHeight=0
  }
   
  window.addEventListener('resize', handleResize);
  if(window.innerWidth > 800){
    Chart.defaults.font.size=10
  
  }else if(window.innerWidth < 700 && window.innerWidth > 500){
    Chart.defaults.font.size=7

  }else if(window.innerWidth < 500){
    Chart.defaults.font.size=5

  }

  return (
    <>

    <div className='  hidden md:flex bg-white p-1  w-full h-full  flex-col items-center justify-center'>
      <div className="w-6/12 flex flex-col justify-center items-center p-5">
        <Pie options={options} data={Data} />
        <p className=" mb-5 text-sm text-gray-500 font-semibold">{xLabels}</p>
      </div>
    </div>
    <div className='  flex md:hidden bg-white p-1 pb-5  w-screen  flex-col items-center'>
    <div className="w-9/12 flex flex-col justify-center items-center p-5">
        <Pie options={options} data={Data} />
        <p className=" mb-5 text-sm text-gray-500 font-semibold">{xLabels}</p>
      </div>
    </div>

  </>
  )
}

export default PieChart


/* 

<Pie options={options} data={Data}/>
        <p className=" mb-5 text-sm text-gray-500 font-semibold">{xLabels}</p>


*/