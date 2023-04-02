import {createContext, useState} from 'react'

export const CartContextCount = createContext();

const ContextCount = ({children}) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const restart = () => {
    setCounter(0);
  };

  return (
    <CartContextCount.Provider 
    value={
      {counter, 
      increment, 
      decrement, 
      restart}}>
    {children}
    </CartContextCount.Provider>
  );
};

export default ContextCount;
