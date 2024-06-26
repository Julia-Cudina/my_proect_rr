import { createBrowserRouter } from 'react-router-dom';
import { Root } from 'features/core/Root';
import { ArticlePage } from 'pages/ArticlePage';
import { AuthPage } from '../pages/Auth';
import { ChampionshipsPage } from 'pages/ChampionshipsPage';
import { EventsPage } from 'pages/EventsPage';
import { RegistrationPage } from 'pages/RegistrationPage';
import { ROUTES } from './routes';
import { CreateArticlePage } from 'pages/CreatArticlePage';
import { MemoExamplePage } from '../pages/MemoExample';
import { OrganizersPage } from 'pages/OrganizersPage';

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
            path: ROUTES.REGISTRATION,
            element: <RegistrationPage />,
        },
        {
          path: ROUTES.ORGANIZERS,
          element: <OrganizersPage />,
      },
        {
          path: `${ROUTES.ARTICLE}/:id`,
          element: <ArticlePage />,
        },
        {
          path: ROUTES.AUTH,
          element: <AuthPage />,
        },
        {path: ROUTES.CREATE_ARTICLE,
          element: <CreateArticlePage />,
        },
        {
          path: ROUTES.MEMO_EXAMPLE,
          element: <MemoExamplePage />,
        },

        ],
    },
    
]);