import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router';
import './global.css';
import { rootStore } from './store';
import { LanguageProvider } from 'features/context/i18n';

export const App = () => {
  //console.log('render App');
  return (
    <LanguageProvider>
      <Provider store={rootStore}>
        <RouterProvider router={router} />;
      </Provider>
    </LanguageProvider>
  );
};

