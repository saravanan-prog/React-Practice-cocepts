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
import { EmployeeListIndex } from './EmployeeList/EmployeeListIndex'
import { ParentComponent } from './react-callback-learning-2/ParentComponent'
import { ParentclassComp } from './react-class-comp-props-callback/ParentclassComp'
import { HomeScreen } from './react-css-implementation/HomeScreen'
import { AboutScreen } from './react-css-implementation/AboutScreen'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LifecycleExampleClass } from './react-life-cycle/LifecycleExampleClass'
import { FcLifecycleExample } from './react-life-cycle/FcLifecycleExample'
import { FetchApiLearningGet } from './react-api-Learning/FetchApiLearningGet'
import { CreateUser } from './react-api-Learning/CreateUser'
import { ProductListing } from './react-axios-api-handling/ProductListing'
import { CreateUserAxios } from './react-axios-api-handling/CreateUserAxios'



createRoot(document.getElementById('root')).render(
  <div>
    <CreateUserAxios />
    {/* <ComponentB /> */}
  </div>
)
