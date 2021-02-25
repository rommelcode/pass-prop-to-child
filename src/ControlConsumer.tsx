import * as React from 'react';
import { useGlobalContext } from './GlobalContextProvider';

const ControlConsumer: React.FC = () => {
  const { isLoggedIn, setIsLoggedIn } = useGlobalContext();

  const handleClick = () => setIsLoggedIn(!isLoggedIn);

  const buttonText = isLoggedIn ? 'Log Out' : 'Log In';

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default ControlConsumer;
