import { useEffect, useState } from 'react';

export const Timer = () => {
  const [count, setCount] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [timerId, setTimerId] = useState();

  useEffect(() => {
    if ('countNum' in localStorage) {
      setCount(+localStorage.getItem('countNum'));
    }
  }, []);

  //   useEffect(() => {
  //     localStorage.setItem('countNum', count);
  //   }, [count]);

  const startHandler = () => {
    setIsStart(true);
    setTimerId(
      setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000)
    );
  };

  const stopHandler = () => {
    setIsStart(false);
    clearInterval(timerId);
    localStorage.setItem('countNum', count);
  };

  const resetHandler = () => {
    setCount(0);
    setIsStart(false);
    clearInterval(timerId);
    localStorage.setItem('countNum', 0);
  };

  return (
    <div style={{ width: '300px', margin: 'auto', textAlign: 'center' }}>
      <h1>React Timer</h1>
      <p>{count}</p>
      {!isStart && <button onClick={startHandler}>Start</button>}
      {isStart && <button onClick={stopHandler}>Stop</button>}
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};
