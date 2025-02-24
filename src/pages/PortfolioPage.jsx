import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

export const PortfolioPage = () => {
  const [time, setTime] = useState(() => new Date());
  const [count, setCount] = useState(0);
  const intervalId = useRef(null);
  const prevCount = useRef(null);
  const { register, handleSubmit, formState: { errors }, } = useForm({
      mode: 'onBlur'
  });
    
  const onSubmit = data => {
    alert(JSON.stringify(data));
  }

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
      <button onClick={() => setCount(count - 1)}> Decrement </button>
      <br/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Fist Name: 
        <input
        {...register('firstName', { required: 'This is required field ', minLength: { value: 5, message: 'Minimum length is 5 symbols' } })}
          />
          <div style={{ color:"tomato" }}>
            {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
          </div>
        </label> <br/>
        <button>Click</button>
      </form>
    </div>
  )
};
