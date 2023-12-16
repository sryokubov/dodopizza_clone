import { Navigate, createBrowserRouter } from 'react-router-dom';
import { HomePage, ProfilePage, NotFoundPage, ContactsPage } from '../pages';
import { Layout } from '../layouts';

const PrivateRoutes = () => {
  const token = localStorage.getItem('token');
  return token ? <ProfilePage /> : <Navigate to='/' />;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },

  {
    path: '/profile',
    element: (
      <Layout>
        <PrivateRoutes />
      </Layout>
    ),
  },

  {
    path: '/contacts',
    element: (
      <Layout>
        <ContactsPage />
      </Layout>
    ),
  },

  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
