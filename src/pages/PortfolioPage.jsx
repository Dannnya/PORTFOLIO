import { useState, useEffect, useRef } from 'react';

export const PortfolioPage = () => {
  const [time, setTime] = useState(() => new Date());
  const [count, setCount] = useState(0);
  const intervalId = useRef(null);
  const prevCount = useRef(null);

  useEffect( () => {
    intervalId.current = setInterval(() => {
      // console.log(`interval every 1s ${Date.now()}`);
      setTime(new Date());
    }, 1000)
  }, [] );

  useEffect(() => { 
    console.log({ count });

    return () => { 
      console.clear(prevCount);
     }
   }, [ count ] );

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <p>
        Time: {time.toLocaleTimeString()}
      </p>
      <button type="button" onClick={stop}>Click</button>

      <h1>{count}</h1>
      <button onClick={() => setCount( count + 1 )}> Increment </button>
      <button onClick={() => setCount( count - 1 )}> Decrement </button>
    </div>
  )
};