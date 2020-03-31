import React, { useState, useEffect } from 'react';

const IntervalExample = () => {
    const [time, setTime] = useState((new Date).toLocaleTimeString());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(time => (new Date).toLocaleTimeString())
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div>
          {time} 
      </div>
    );
  };

export default IntervalExample;