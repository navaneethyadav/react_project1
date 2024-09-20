import React, { useState } from 'react'

export const App = () => {
    const [count, setcount] = useState(1)
  return (
    <div>
        {count}
        <button onClick={()=> setcount(count+1)}> change </button>
    </div>
  )
}
export default App;