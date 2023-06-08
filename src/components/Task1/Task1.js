import { useState, useEffect } from 'react';

function Task1() {
  let begin = 2; // Starting number
  let stop = 100; // Ending number
  let count = 0; // Counter for even numbers
  const [array, setArray] = useState([]); //state for storing values in array
  useEffect(() => {
    const interval = setInterval(() => {
      // Loop to print 5 even numbers
      for (let i = begin; i <= stop && count < 5; i += 2) {
        console.log(i); //printing the value on console

        count++;
        setArray(prev => [...prev, i]);
      }

      begin += 10; // Increment begin by 10 for the next set of 5 even numbers
      count = 0; // Reset the counter

      if (begin > stop) {
        clearInterval(interval); // Stop the interval if all numbers have been printed
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []); // Delay of 5 seconds (5000 milliseconds)
  return <div className='box'>{array.toString()}</div>; //printing it on screen
}

export default Task1;
