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
import AllProducts from "./Components/Home-appliance-Product-Routes/AllProducts.jsx";
import AC from "./Components/Home-appliance-Product-Routes/AC.jsx";
import AirFryer from "./Components/Home-appliance-Product-Routes/Air-Fryer.jsx";
import Geyser from "./Components/Home-appliance-Product-Routes/Geyser.jsx";
import Oven from "./Components/Home-appliance-Product-Routes/Oven.jsx";
import WashingMachine from "./Components/Home-appliance-Product-Routes/Washing-Machine.jsx";
import MAll from "./Components/BrandRoutes/SmartMobileBrands/MAll.jsx";
import MApple from "./Components/BrandRoutes/SmartMobileBrands/MApple.jsx";
import MGoogle from "./Components/BrandRoutes/SmartMobileBrands/MGoogle.jsx";
import MMotorola from "./Components/BrandRoutes/SmartMobileBrands/MMotorola.jsx";
import MOnePlus from "./Components/BrandRoutes/SmartMobileBrands/MOnePlus.jsx";
import MVivo from "./Components/BrandRoutes/SmartMobileBrands/MVivo.jsx";
import AAll from "./Components/BrandRoutes/ACBrands/AAll.jsx";
import ASamsung from "./Components/BrandRoutes/ACBrands/ASamsung.jsx";
import AGree from "./Components/BrandRoutes/ACBrands/AGree.jsx";
import ASinger from "./Components/BrandRoutes/ACBrands/ASinger.jsx";
import AGeneral from "./Components/BrandRoutes/ACBrands/AGeneral.jsx";
import AirFryerAll from "./Components/BrandRoutes/AirFryerBrands/AirFryerAll.jsx";
import AirXiaomi from "./Components/BrandRoutes/AirFryerBrands/AirXiaomi.jsx";
import GAll from "./Components/BrandRoutes/GeyserBrands/GAll.jsx";
import GMidea from "./Components/BrandRoutes/GeyserBrands/GMidea.jsx";
import GTropica from "./Components/BrandRoutes/GeyserBrands/GTropica.jsx";
import OWalton from "./Components/BrandRoutes/OvenBrands/OWalton.jsx";
import OAll from "./Components/BrandRoutes/OvenBrands/OAll.jsx";
import HeadphonesAll from "./Components/BrandRoutes/HeadphonesBrands/HeadphonesAll.jsx";
import HeadphoneApple from "./Components/BrandRoutes/HeadphonesBrands/HeadphoneApple.jsx";
import HeadphonesGamdias from "./Components/BrandRoutes/HeadphonesBrands/HeadphonesGamdias.jsx";
import HeadphonesRazer from "./Components/BrandRoutes/HeadphonesBrands/HeadphonesRazer.jsx";
import HeadphonesLogitech from "./Components/BrandRoutes/HeadphonesBrands/HeadphonesLogitech.jsx";
import Dji from "./Components/BrandRoutes/Drones/DJI.jsx";
import MiniToyDrone from "./Components/BrandRoutes/Drones/MiniToyDrone.jsx";
import DroneAll from "./Components/BrandRoutes/Drones/DroneAll.jsx";
import GameConsoleAll from "./Components/BrandRoutes/GameConsoleBrands/GameConsoleAll.jsx";
import Xbox from "./Components/BrandRoutes/GameConsoleBrands/Xbox.jsx";
import Playstation from "./Components/BrandRoutes/GameConsoleBrands/Playstation.jsx";

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
        element: <HomeAppliances/>,
        children: [
          {
            path: '',
            element: <AllProducts/>
          },
          {
            path: 'ac',
            element: <AC/>,
            children: [
              {
                path: '',
                element: <AAll/>
              },
              {
                path: 'samsung',
                element: <ASamsung/>
              },
              {
                path: 'gree',
                element: <AGree/>
              },
              {
                path: 'singer',
                element: <ASinger/>
              },
              {
                path: 'general',
                element: <AGeneral/>
              }
            ]
          },
          {
            path: 'air-fryer',
            element: <AirFryer/>,
            children: [
              {
                path: '',
                element: <AirFryerAll/>
              },
              {
                path: 'xiaomi',
                element: <AirXiaomi/>
              }
            ]
          },
          {
            path: 'geyser',
            element: <Geyser/>,
            children: [
              {
                path: '',
                element: <GAll/>
              },
              {
                path: 'midea',
                element: <GMidea/>
              },
              {
                path: 'tropica',
                element: <GTropica/>
              }
            ]
          },
          {
            path: 'oven',
            element: <Oven/>,
            children: [
              {
                path: '',
                element: <OAll/>
              },
              {
                path: 'walton',
                element: <OWalton/>
              }
            ]
          },
        ]
      },
      {
        path: '/smart-watch',
        element: <SmartWatch/>,
        children: [
          {
            path: '',
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
        element: <Mobiles/>,
        children: [
          {
            path: '',
            element: <MAll/>
          },
          {
            path: 'apple',
            element: <MApple/>
          },
          {
            path: 'google',
            element: <MGoogle/>
          },
          {
            path: 'motorola',
            element: <MMotorola/>
          },
          {
            path: 'oneplus',
            element: <MOnePlus/>
          },
          {
            path: 'vivo',
            element: <MVivo/>
          }
        ]
      },
      {
        path: '/headphone',
        element: <Headphones/>,
        children: [
          {
            path: '',
            element: <HeadphonesAll/>
          },
          {
            path: 'apple',
            element: <HeadphoneApple/>
          },
          {
            path: 'gamdias',
            element: <HeadphonesGamdias/>
          },
          {
            path: 'razer',
            element: <HeadphonesRazer/>
          },
          {
            path: 'logitech',
            element: <HeadphonesLogitech/>
          }
        ]
      },
      {
        path: '/drone',
        element: <Drone/>,
        children: [
          {
            path: '',
            element: <DroneAll/>
          },
          {
            path: 'dji',
            element: <Dji/>
          },
          {
            path: 'Mini-Toy-Drone',
            element: <MiniToyDrone/>
          }
        ]
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
        element: <GameConsole/>,
        children: [
          {
            path: '',
            element: <GameConsoleAll/>
          },
          {
            path: 'xbox',
            element: <Xbox/>
          },
          {
            path: 'playstation',
            element: <Playstation/>
          }
        ]
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
    path: '/admindashboard',
    element: <PrivateRoute><AdminDashBoard/></PrivateRoute>,
    children: [
      {
        path: 'addproducts',
        element: <AddProduct />
      },
      {
        path: 'updateproducts/:id',
        element: <UpdateProduct/>,
        loader: async ({params}) => await fetch(`http://localhost:3000/addproduct/${params.id}`)
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
