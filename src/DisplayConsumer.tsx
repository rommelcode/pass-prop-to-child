import * as React from 'react';
import { useGlobalContext } from './GlobalContextProvider';

const DisplayConsumer: React.FC = () => {
  const { isLoggedIn } = useGlobalContext();

  return (
    <div>
      <div>isLoggedIn: {isLoggedIn ? 'true' : 'false'}</div>
    </div>
  );
};

export default DisplayConsumer;
