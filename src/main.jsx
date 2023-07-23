import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import App from './App';
import DashBoard from './page/dashboard/DashBoard';
import Team from './page/team/Team';
import Contact from './page/contact/Contact';
import Invoice from './page/invoices/Invoice';
import Form from './page/form/Form';
import Calender from './page/calender/Calender';
import Faq from './page/faq/Faq';
import Bar from './page/bar/Bar';
import Pie from './page/pie/Pie';
import Line from './page/line/Line';
import Geography from './page/geography/Geography';




// @ts-ignore
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
    <Route index element={<DashBoard />} />
    <Route path='team' element={<Team />} />
    <Route path='team' element={<Team />} />
    <Route path='contacts' element={<Contact />} />
    <Route path='invoices' element={<Invoice />} />
    <Route path='form' element={<Form />} />
    <Route path='calender' element={<Calender />} />
    <Route path='faq' element={<Faq />} />
    <Route path='bar' element={<Bar />} />
    <Route path='pie' element={<Pie />} />
    <Route path='line' element={<Line />} />
    <Route path='geography' element={<Geography />} />
    
     
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
