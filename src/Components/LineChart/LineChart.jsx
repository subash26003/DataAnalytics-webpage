import React,{useEffect,useState} from 'react';
import "./linechart.css"
import { useDataContext } from '../../DataContextProvider/DataContextProvider'; // to get Data from context provider


// Import necessary components and function required for Line chart from chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';  // import Line chart 

// register the components to Chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const LineChart = () => {

    const {responseData ,isLoading,xLabels,yLabels,limit} = useDataContext() // access Api response data from Context Provider

    const [chartXlabelValues , setChartXlabelValues] = useState([0])  // set the values of X label
    const [selectedYlabels,setselectedYlabels] = useState([]);  // set the selected Y labels
    
    useEffect(() =>{
      // to Get the X label values with same type of data like only Age or only one Properties with different value
      if(xLabels){
        let x =[]             
        responseData.forEach(e => {
          let value = Math.ceil(e[xLabels])
          if(!x.includes(value)){
            x.push(value)
          }
        })
        setChartXlabelValues(x)
      }
      if(yLabels){ 
        setselectedYlabels(yLabels)
      }
      
      
   // eslint-disable-next-line 
  },[isLoading,yLabels,xLabels])

  // options for Bar chart
  const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' ,
          labels:{
            boxWidth : 20,
            boxHeight:5,
            font:{
              size:7
            }
          }
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
  };
// data object for bar chart
  const data = {
      labels:chartXlabelValues.length !== 0 ? chartXlabelValues.slice(limit[0],limit[1]) : [0],  // selected X label values / Default values
      datasets:  selectedYlabels.map((label, idx) => (  // iterate through Y labels to get the value from response Data
        {
        label: label,
        fill:true,
        data: responseData.map(item => parseFloat(item[label])), // Y-axis values for each attribute
        backgroundColor: `rgba(${75 + idx * 60}, 192, 192, 0.2)`,
        borderColor: `rgba(${75 + idx * 60}, 192, 192, 1)`,
        borderWidth: 1,
    })),
  };

      
      
  return (
    <>
    <div className='bar-chart-card p-1 w-full hidden md:flex flex-col items-center justify-center h-full'>
      <Line options={options} data={data} height={150} width={300}/>
      <p className='text-sm text-gray-500 font-semibold'>{xLabels}</p>
    </div>
    <div className='bar-chart-card p-1 w-full flex md:hidden flex-col items-center justify-center h-full'>
      <Line options={options} data={data}height={500} width={400} />
      <p className='text-sm text-gray-500 font-semibold'>{xLabels}</p>
    </div>
    </>
  )
}

export default LineChart


/* 

 <div className='bar-chart-card pb-5 pl-1 pt-3 pr-1 mt-5 m-0.5 w-full flex flex-col items-center justify-center h-full'>
      <Bar options={options} data={data} height={chartHeight} width={1200}/>
      <p className='text-center text-xs text-gray-500 font-semibold'>{xLabels}</p>
      </div>


       
*/