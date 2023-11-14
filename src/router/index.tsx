import { createBrowserRouter } from 'react-router-dom';
import { HomePage, ProfilePage, NotFoundPage } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },

  {
    path: '/profile',
    element: <ProfilePage />,
  },
]);
