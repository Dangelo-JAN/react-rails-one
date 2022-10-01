import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/Greetings/Greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(getGreetings());
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
    </>
  );
};

export default Greeting;
