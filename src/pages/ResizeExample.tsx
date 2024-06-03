import { useEffect, useState } from 'react';

export const ResizeExamplePage = () => {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeHandler = () => {
      console.log('call');
      setwindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return (
    <div>
      <h2>Resize example</h2>

      <h3>width {windowWidth}</h3>
    </div>
  );
};
