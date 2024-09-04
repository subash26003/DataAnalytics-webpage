import { createContext ,useContext, useEffect, useState  } from "react";
import axiosRequest from "../endpoints/axiosRequest";  // Axios instance to make Http request

export const DataContext = createContext();   // create a context 

export const DataProvider = ({children}) =>{
    const [responseData,setResponseData] = useState([]);   // to store the response data
    const [fetchError , setFetchError] = useState(null)  // to store the fetch error
    const [isLoading , setIsLoading] = useState(null)  // state for request done or not
    const [DataLabels , setDataLabels] = useState([])  // to extract data labels from the response data

    const [xLabels,setXlabels] = useState([])
    const [yLabels,setYlabels] = useState([])

    const [limit,setLimit] = useState([0,20])


    useEffect(() =>{
        const FetchData = async () =>{  
            try{
                setIsLoading(true)  // before request set loading as true
                const response = await axiosRequest.get("/analytics")  // request for data
                setResponseData(response.data) // set the data to the variable
                let labels = Object.getOwnPropertyNames(response.data[0])  // extract the labels
                labels= labels.filter(each => (each.toLowerCase() !== "id" && each.toLowerCase()!== "outcome"))
                setDataLabels(labels)  // set the labels
            }catch(err){
                setFetchError(err.message)  // set the error if any
            }finally{
                setIsLoading(false) // after request set loading as false
            }
        }
        FetchData() 
    },[])
  
    // provide the necessary data to the child
    return(
        <DataContext.Provider value={{responseData,fetchError,isLoading,DataLabels,xLabels,yLabels,limit ,setXlabels,setYlabels,setLimit, setResponseData}}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => useContext(DataContext)  // create a function for context 