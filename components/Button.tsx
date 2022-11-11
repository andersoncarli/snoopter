// https://javascript.plainenglish.io/next-js-keep-state-7eb68984c54e
import { useState, useEffect, useLayoutEffect } from 'react'

function Button() {
  const [count, setCount] = useState(0)

  // if (typeof window !== "undefined") {
  useLayoutEffect(() => {
    if (sessionStorage.getItem('state')) {
      setCount(Number(sessionStorage.getItem('state')))
    } else {
      sessionStorage.setItem('state', count.toString())
    }
  }, [count])

  useEffect(() => {
    sessionStorage.setItem('state', count.toString())
  }, [count])
  // }

  return (
    <>
      <p></p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  )
}
export default Button