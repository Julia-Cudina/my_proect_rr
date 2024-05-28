import { Root } from 'features/core/Root';
import { ChampionshipsPage } from 'pages/ChampionshipsPage';
import { EventsPage } from 'pages/EventsPage';
import { createBrowserRouter } from 'react-router-dom';
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
        ],
    },
    
]);