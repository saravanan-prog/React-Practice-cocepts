import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ParentComponent } from './Oct25-react-contextAPI/ParentComponent';
import { EmployeeListIndex } from './EmployeeList-Context-API/EmployeeListIndex';



createRoot(document.getElementById('root')).render(
  <div>
    <EmployeeListIndex />
   
  </div>
)
