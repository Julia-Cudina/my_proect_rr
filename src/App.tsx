import { RouterProvider } from 'react-router-dom';
import './global.css';
import { router } from 'router';


export const App = () => {
  return <RouterProvider router={router} />;
};

//const Compmonent = () => {
 
//  const currentUrl= '';
//  const fallbakck = '';

//  if (currentUrl === '/') return <div>Корневой путь</div>;

//  if (currentUrl === 'events') return <div>Раздел События</div>;

//  return fallbakck;
//};