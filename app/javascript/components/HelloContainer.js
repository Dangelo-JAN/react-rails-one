import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/Greetings/Greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(getGreetings);
  }, []);

  return (
    <>
      <div>
        <h1>      
          {greeting}
          {' '}
          World!
        </h1>
      </div>

      <div>
        <h1>      
          Welcome to greeting app!
        </h1>
        <h1>Hello World! hi desde el hello container 2.1</h1>
      </div>      
    </>
  );
};

export default Greeting;
