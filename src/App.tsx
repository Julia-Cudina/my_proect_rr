import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router';
import './global.css';
import { rootStore } from './store';

export const App = () => {
  //console.log('render App');
  return (
    <Provider store={rootStore}>
      <RouterProvider router={router} />;
    </Provider>
  );
};

//const Compmonent = () => {

//  const currentUrl= '';
//  const fallbakck = '';

//  if (currentUrl === '/') return <div>Корневой путь</div>;

//  if (currentUrl === 'events') return <div>Раздел События</div>;

//  return fallbakck;
//};
