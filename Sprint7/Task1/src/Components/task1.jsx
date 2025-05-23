import React from 'react'

export const Task1 = () => {
    const [count, setCount] = React.useState(0);
  return (
    <>
    <h1 style={{ textAlign: "center" }}>Task1</h1>
    <div className="counter">
         <h1>Counter: {count}</h1>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <button onClick={() => setCount(count - 1)}>Decrement</button>
         <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  )
}
