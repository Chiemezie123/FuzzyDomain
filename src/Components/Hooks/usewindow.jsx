import { useEffect, useState } from 'react';


function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
   
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log('window.innerWidth:', windowWidth)
    };

   
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]); 

  return windowWidth;
}

export default useWindowWidth;
