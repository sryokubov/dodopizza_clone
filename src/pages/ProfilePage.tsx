import { useContext, useRef } from 'react';
import { Button } from '../components';
import { AuthContext } from '../context';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../services/auth/AuthService';

const ProfilePage = () => {
  // useEffect(() => {
  //   localStorage.setItem('cartItems', '123;234');
  //   const cartItems = localStorage.getItem('cartItems');
  //   console.log(cartItems?.split(';'));
  // }, []);

  const { setIsLoggedIn } = useContext(AuthContext);
  const authService = useRef(new AuthService());
  const navigate = useNavigate();

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('orders');
    authService.current.logout();
    navigate('/');
  };
  return (
    <div>
      <Button type={'tertiary-btn'} size={'small-btn'} onClick={logoutHandler}>
        Выйти
      </Button>
    </div>
  );
};

export default ProfilePage;
