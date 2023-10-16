import React, {useState, useEffect}  from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import PetList from './components/PetList.jsx';
import NewPetForm from './components/NewPetForm.jsx';


const routes = [
  {
    path:'/',
    element: <App/>,
    errorElement: <div>Error 404 - Not Found</div>,
    children:[
      {
        path: '/',
        element: <PetList/>
      },
      {
        path: '/createPet',
        element: <NewPetForm/>
      },
    ]
  }
  ]
  
  const router = createBrowserRouter(routes)
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
  )

