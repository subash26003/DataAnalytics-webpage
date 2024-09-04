command --> "npx create-react-app analytics" (To create this project default folder)

Pakacges: 

1. react-router-dom: v-6.25.1    --> For Routing purpose 

    install command  "npm i react-router-dom -S"
    
    After installation:
        step 1: place the App component inside the BrowseRouter Component in "index.js"
                 <BrowserRouter>
                    <React.StrictMode>
                    <App />
                    </React.StrictMode>
                </BrowserRouter>

        step 2: Import Routes,Route and other component to provide routing Functionality


2. Tailwind CSS: v-3.4.7   --> For Styling purpose 

    install command   "npm install -D tailwindcss"
                      "npx tailwindcss init "
    
    After installation:
        step 1: Open the "tailwind.config.js" file and overwrite the content 
                 content: [
                    "./src/**/*.{js,jsx,ts,tsx}",
                    ] 

        step 2: In index.css place the below commands.
            @tailwind base;
            @tailwind components;
            @tailwind utilities;


3. Axios: v-1.7.2    --> To Perform CURD Operations 

    install command   "npm install axios"
    
    After installation:
        step 1: Create separate folder for Axios and create a axios instance 
                import axios from "axios";
                export default axios.create({
                    baseURL:"place the end point URL"
                })

        step 2: Import the above function when there is any need for Http request or response 
           
4. read-excel-file: v-5.8.4    --> To Read the Excel File

    install command   "npm install read-excel-file"
    
    After installation:
        step 1: import "readXlsxFile" from "read-excel-file" and use it to read the Excel file
                readXlsxFile(file)

           
5. Chart.js (v-4.4.3)  and react-chartjs-2 (v-5.2.0)  --> To visualize the Data in different Charts

    install command   "npm i react-chartjs-2" 
                      "npm i chart.js"
                    
    After installation:
        step 1: import necessary components and funtions from chart.js and react-chartjs-2 use it to           display the data in charts.

            import { Chart ,CategoryScale,Title,Tooltip,Legend,BarElement,LinearScale } from 'chart.js'

            import { Bar } from 'react-chartjs-2'

6. React-icons: v-5.2.1   --> To use Icons in this project

    install command  "npm install react-icons"

    After installation:
        step 1: import necessary icon components from react-icons to use.

            import { IoMdArrowDropdown,IoMdArrowDropup } from "react-icons/io";

To perform CURD operations Create a database folder and provide a necessary data.After that run the below command to create localhost json server in the port 4000.

  "npx json-server -p 4000 -w data/db.json"

