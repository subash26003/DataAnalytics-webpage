import React from 'react'
import "./uploadpage.css"
import { useState } from 'react'
import readXlsxFile from 'read-excel-file'   // To read a Excel file

const UploadPage = () => {

  const  [selectedFile , setSelectedFile] = useState(null)  // To Store the file, provided by the user
  const [jsonData,setJsonResult] = useState(null)  // to store the coverted JSON file 
  const [fileType,setFileType] = useState(null)   // to store the File Type, Which is used to call the corresponding functions to convert the file to JSON File

  const ConvertExcelToJson = (selectedFile) =>{  
      readXlsxFile(selectedFile)  // Read the file using "readXlsxFile"
      .then((data) => {           
        let headers = [];         // array to store the Labels 
        let json_object = [];     // Array to stored the converted json Data
        
        data.forEach((row, index) => {   // Traverse the data 
          if (index === 0) {            // Label are present in first index which is an array   
            headers = row;              // store it in Header
          } else {
            let temp = {};              // create a temporary object to extract the each row data
            for (let x = 0; x < row.length; x++) {  // Traverse through row ,except first row
              temp[headers[x]] = row[x];            // fill the tamp object with labels and corresponding values
            }
            json_object.push(temp);         // add the temp object
          }
        });

        setJsonResult(JSON.stringify(json_object,undefined,4));  // convert the result object by 4 column each and store it in setJsonResult 
      })
      .catch((error) => {
        console.error('Error reading file:', error);  // If file is not readed correctly
      });
  }

  const convertCsvToJSON =(CSVfile) =>{
    let eachLine = CSVfile.split("\n")  // form the array by split the newlines

      const headers = eachLine[0].split(",")  // get the labels which are present in first row

    const result = []
    
    for(let i=1 ; i<eachLine.length ;i++){  // traverse through the array except first index
      const temp = {}   // create a temporary object to extract the each row data

      const currentLine = eachLine[i].split(",")  // split the row by ","
      for(let j =0 ;j< headers.length;j++ ){      // traverse through the row
        temp[headers[j].trim()] = currentLine[j]   // extract the label values for each labels
      }
      result.push(temp)      // add the temp object
    }
    setJsonResult(JSON.stringify(result,undefined,4))  // convert the reslut object to json by 4 colums and store it in setJsonResult
  }

  const handleSumbitBtn = () =>{   // Handle to submit button 
    if (selectedFile) {            // If the file is stored in the selectFile variable by "handleInputElement"
      if(fileType === "xlsx" || fileType ==="xls"){   // if file type is Excel 
        ConvertExcelToJson(selectedFile)   // call the function to convert it to json 
      }else if(fileType === "csv"){  // if the file is CSV
        let fileReader = new FileReader()   // Create a instance for FileReader 
        fileReader.readAsText(selectedFile) 
            fileReader.onload = (e) => {     // Load the file and Call the function "convertCsvToJSON" to convert to JSON
              let CSVfile = e.target.result 
              convertCsvToJSON(CSVfile)
            }
      }else{
        alert("Choose the File Either in CSV or Excel ")    // If the file type is other then excel or csv alert the user
      }
      
    }
    console.log(jsonData)

  }

  const handleInputElement = (e) =>{   // Function to get the user provided File
    const file = e.target.files[0]     // get the file from the input element
    setFileType(file.name.split(".").pop().toLowerCase())  // extract the file type and store it
    if(file){
      setSelectedFile(file)   // store it in selected file
    }
  }


  return (
    <div className='h-screen w-screen flex justify-center items-center mt-10'>  {/* Outer container of the Upload page */}
      <div className='bg-white pb-20 pt-5 pl-10 pr-10 h-4/6  landscape:h-5/6 w-11/12 sm:w-6/12 rounded-2xl shadow-lg '>  
        <div className='flex flex-col text-center'>  {/*container For Title */}
          <p className='text-sm font-bold '>Which File has to be Analysed</p>
          <p>Upload your File</p>
        </div>
        <div className='mt-10 h-3/6 landscape:h-4/6  p-1 bg-gray-200 border-dashed border-2 border-black flex flex-col justify-center items-center overflow-hidden'> {/*Container for Input Element */}
          <p className='text-center text-sm font-bold tracking-wider mb-2'>Drag and Drop </p>
          <p className='text-center mb-2 '>or</p>
          <div className='border p-1 rounded border-black'>
            <input 
              type="file"
              placeholder='Upload' 
              className='input-file-element'
              accept='.csv , .xlsx , .xls'
              onChange={(e) => handleInputElement(e)}
            >
            </input>
            </div>
        </div>
        <div className='mt-5 flex justify-center'>  {/*Container for submit button */}
          <button 
            className='button-element text-sm font-semibold submit-button'
            onClick={handleSumbitBtn}
          >Submit</button>
        </div>
      </div>
    </div>
  )
}

export default UploadPage