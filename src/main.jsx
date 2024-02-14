import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import DonationDetails from './components/DonationDetails/DonationDetails';
import Donated from './components/Donated/Donated';
import Statistics from './components/Statistics/Statistics';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: ([
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donationDetails/:donationId",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('../public/donationData.json')
      }
      ,
      {
        path: "/donations",
        element: <Donated></Donated>,
        loader: () => fetch('../public/donationData.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch('../public/donationData.json')
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ])
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
