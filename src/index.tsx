import * as React from 'react';
import { FC } from 'react';
import { render } from 'react-dom';
import GlobalContextProvider from './GlobalContextProvider';
import DisplayConsumer from './DisplayConsumer';
import ControlConsumer from './ControlConsumer';

import './styles.css';
interface IProps {
  className: string;
  disabled: boolean;
}
const Child: FC<IProps> = ({ className, disabled }: IProps) => {
  return (
    <button className={className} disabled={disabled}>
      Click here {className} {disabled ? 'hahah' : 'blabla'}
    </button>
  );
};

// Child.defaultProps = {
//   className: '',
//   disabled: false
// };

const Parent: FC = () => {
  return <Child className={'poop'} disabled={true} />;
};

function App(): JSX.Element {
  return <div className="App">hello</div>;
}

const rootElement = document.getElementById('root');
render(<Parent />, rootElement);
