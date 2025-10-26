import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Exampleusref } from './oct26-react-useRef-hook/Exampleusref';
import { Counter } from './react-memoization/Counter';
import { Calculation } from './react-usememo-hook/Calculation';





createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Calculation />
  </StrictMode>
)
