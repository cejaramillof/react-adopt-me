import React, { useState, useEffect, useCallback, memo } from "react";


// Class componentes you use pure components to improve the performance
// Functional componentes you can use memo
// memo: as long as none of my props have changed, dont re-render me
const ExpensiveComputationComponent = memo(({ compute, count }) => {
  return (
    <div>
      <h1>computed: {compute(count)}</h1>
      <h4>last re-render {new Date().toLocaleTimeString()}</h4>
    </div>
  );
});

const CallbackComponent = () => {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(1);
  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  }, []);
  // });

  // by default, this function will be different in each re-render
  // with useCallback, if dont change, it will give me back the same function
  const fibonacci = n => {
    if (n <= 1) {
      return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  return (
    <div>
      <h1>useCallback Example {time.toLocaleTimeString()}</h1>
      <button onClick={() => setCount(count + 1)}>
        current count: {count}
      </button>
      <ExpensiveComputationComponent
        // useCallback works almost the same as useMemo
        // compute={fibonacci}
        compute={useCallback(fibonacci, [])} // will return the callback, but without calling the memoized function
        count={count}
      />
    </div>
  );
};

export default CallbackComponent;
