import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./Components/Roots/App.jsx";
import {Home} from "./Components/Home/Home.jsx";
import './index.css'
import SignIn from "./Components/Authentications/SignIn.jsx";
import SignUp from "./Components/Authentications/SignUp.jsx";
import AuthProvider from "./Components/Provider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {Toaster} from "react-hot-toast";
import PrivateRoute2 from "./Components/PrivateRoutes/PrivateRoute2.jsx";
import AdminDashBoard from "./Components/Dashboard/AdminDashBoard.jsx";
import AddProduct from "./Components/Dashboard/AddProduct.jsx";
import UpdateProduct from "./Components/Dashboard/UpdateProduct.jsx";
import FeaturedProduct from "./Components/Dashboard/FeaturedProduct.jsx";

const queryClient = new QueryClient();

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <PrivateRoute2><SignIn/></PrivateRoute2>
      },
      {
        path: '/register',
        element: <PrivateRoute2><SignUp/></PrivateRoute2>
      }
    ]
  },
  {
    path: 'admindashboard',
    element: <AdminDashBoard/>,
    children: [
      {
        path: 'addproducts',
        element: <AddProduct />
      },
      {
        path: 'updateproducts',
        element: <UpdateProduct/>
      },
      {
        path: 'featuredproducts',
        element: <FeaturedProduct/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center"/>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
