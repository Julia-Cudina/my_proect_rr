import { Root } from 'features/core/Root';
import { ChampionshipsPage } from 'pages/ChampionshipsPage';
import { EventsPage } from 'pages/EventsPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
          {
            index: true,
            element: <EventsPage />,
          },
          {
            path: '/championships',
            element: <ChampionshipsPage />,
        },
        ],
    },
    
]);