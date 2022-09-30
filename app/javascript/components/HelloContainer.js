import React from 'react';


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/Greetings/Greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(getGreetings);
  }, [dispatch]);

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

        <h1>Hello World! hi desde el hello container</h1>
      </div>      
    </>
  );
};

export default Greeting;







// import React from "react";
// import { NavLink } from 'react-router-dom';
// const Hello = () => {
//   return (
//     <div>
//       <h1>      
//         Welcome to greeting app!
//       </h1>
//       <NavLink to={`/greet`}>Get your random greeting</NavLink>
//     </div>
//   );
// };

// export default Hello;