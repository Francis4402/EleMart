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
import AllUsers from "./Components/Dashboard/AllUsers.jsx";
import PrivateRoute from "./Components/PrivateRoutes/PrivateRoute.jsx";
import Mobiles from "./Components/ProductRoutes/Mobiles.jsx";
import HomeAppliances from "./Components/ProductRoutes/Home-Appliances.jsx";
import SmartWatch from "./Components/ProductRoutes/Smart-Watch.jsx";
import Headphones from "./Components/ProductRoutes/Headphones.jsx";
import Drone from "./Components/ProductRoutes/Drone.jsx";
import PortablePowerStation from "./Components/ProductRoutes/Portable-Power-Station.jsx";
import Battery from "./Components/ProductRoutes/Battery.jsx";
import TV from "./Components/ProductRoutes/TV.jsx";
import GameConsole from "./Components/ProductRoutes/GameConsole.jsx";
import ActionCamera from "./Components/ProductRoutes/Action-Camera.jsx";
import Printer from "./Components/ProductRoutes/Printer.jsx";
import WApple from "./Components/BrandRoutes/SmartWatchesBrands/WApple.jsx";
import WGoogle from "./Components/BrandRoutes/SmartWatchesBrands/WGoogle.jsx";
import WRealme from "./Components/BrandRoutes/SmartWatchesBrands/WRealme.jsx";
import WHuawei from "./Components/BrandRoutes/SmartWatchesBrands/WHuawei.jsx";
import WWalton from "./Components/BrandRoutes/SmartWatchesBrands/WWalton.jsx";
import WAll from "./Components/BrandRoutes/SmartWatchesBrands/WAll.jsx";
import ProductDetails from "./Components/ProductDetailRoutes/ProductDetails.jsx";
import Specification from "./Components/ProductDetailRoutes/Specification.jsx";
import Description from "./Components/ProductDetailRoutes/Description.jsx";
import Questions from "./Components/ProductDetailRoutes/Questions.jsx";
import Reviews from "./Components/ProductDetailRoutes/Reviews.jsx";

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
      },
      {
        path: '/home-appliances',
        element: <HomeAppliances/>
      },
      {
        path: '/smart-watch',
        element: <SmartWatch/>,
        children: [
          {
            path: '/smart-watch',
            element: <WAll/>
          },
          {
            path: 'apple',
            element: <WApple/>
          },
          {
            path: 'google',
            element: <WGoogle/>
          },
          {
            path: 'realme',
            element: <WRealme/>
          },
          {
            path: 'huawei',
            element: <WHuawei/>
          },
          {
            path: 'walton',
            element: <WWalton/>
          }
        ]
      },
      {
        path: '/mobile-phones',
        element: <Mobiles/>
      },
      {
        path: '/headphone',
        element: <Headphones/>
      },
      {
        path: '/drone',
        element: <Drone/>
      },
      {
        path: '/portable-power-station',
        element: <PortablePowerStation/>
      },
      {
        path: '/battery',
        element: <Battery/>
      },
      {
        path: '/tv',
        element: <TV/>
      },
      {
        path: '/game-console',
        element: <GameConsole/>
      },
      {
        path: '/action-camera',
        element: <ActionCamera/>
      },
      {
        path: '/printer',
        element: <Printer/>
      },
      {
        path: '/:name/:id',
        element: <ProductDetails/>,
        loader: ({params}) => fetch(`http://localhost:3000/product/${params.name}/${params.id}`),
        children: [
          {
            path: '/:name/:id',
            element: <Specification/>,
            loader: ({params}) => fetch(`http://localhost:3000/product/${params.name}/${params.id}`)
          },
          {
            path: '/:name/:id/description',
            element: <Description/>,
            loader: ({params}) => fetch(`http://localhost:3000/product/${params.name}/${params.id}`)
          },
          {
            path: '/:name/:id/questions',
            element: <Questions/>
          },
          {
            path: '/:name/:id/reviews',
            element: <Reviews/>
          }
        ]
      }
    ]
  },
  {
    path: 'admindashboard',
    element: <PrivateRoute><AdminDashBoard/></PrivateRoute>,
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
      },
      {
        path: 'allusers',
        element: <AllUsers/>
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
