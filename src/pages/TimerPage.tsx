import { useEffect, useState } from 'react';

export const TimerPage = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log('time has mounted');

    const timerId = setInterval(() => {
      console.log('timer has called');
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => {
      console.log('timer has unmounted');
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <h2>Timer</h2>

      <p>Second: {seconds}</p>
    </div>
  );
};
