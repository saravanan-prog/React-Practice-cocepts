import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Helloworld } from './react-function-compoent-learning/Helloworld'
import { StateManagment } from './react-function-compoent-learning/StateManagement'
import { UpdateState } from './react-function-compoent-learning/UpdateState'
import { InputBasedUpdate } from './react-function-compoent-learning/InputBasedUpdate'
import { ListManagement } from './react-function-compoent-learning/ListManagement'
import { EmployeeForm } from './react-function-compoent-learning/EmployeeForm'
import { CounterProgram } from './react-class-component-basics/SimpleUpdateState'
import { EmployeeClassState } from './react-class-component-basics/EmployeeClassState'
import { ComponentA } from './react-simple-props-learning/ComponentA'
import { ComponentB } from './react-simple-props-learning/ComponentB'
import { ParentComponent } from './react-callback-learning/ParentComponent'
import { EmployeeListIndex } from './EmployeeList/EmployeeListIndex'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeeListIndex />
    {/* <ComponentB /> */}
  </StrictMode>
)
