import { createBrowserRouter } from 'react-router-dom';
import { Root } from 'features/core/Root';
import { ArticlePage } from 'pages/ArticlePage';
import { AuthPage } from '../pages/Auth';
import { ChampionshipsPage } from 'pages/ChampionshipsPage';
import { EventsPage } from 'pages/EventsPage';
import { ROUTES } from './routes';


export const router = createBrowserRouter([
    {
        path: ROUTES.ROOT,
        element: <Root />,
        children: [
          {
            index: true,
            element: <EventsPage />,
          },
          {
            path: ROUTES.CHAMPIONSHIPS,
            element: <ChampionshipsPage />,
        },
        {
          path: `${ROUTES.ARTICLE}/:id`,

          element: <ArticlePage />,
        },
        {
          path: ROUTES.AUTH,
          element: <AuthPage />,
        },
        ],
    },
    
]);