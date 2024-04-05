import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { SidebarProvider } from './context/sidebarContext';
import { MealProvider } from './context/mealContext';
import App from './App';
import { AuthProvider } from './store/auth';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const root = createRoot(document.getElementById('root'));

root.render(
<AuthProvider>
<SidebarProvider>
    <MealProvider>
      <App />
      <ToastContainer/>
    </MealProvider>
</SidebarProvider>
</AuthProvider> 
);

