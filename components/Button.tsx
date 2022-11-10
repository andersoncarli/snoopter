// https://javascript.plainenglish.io/next-js-keep-state-7eb68984c54e
import { useState, useEffect, useLayoutEffect } from 'react'

export default function button() {
  const [count, setCount] = useState(0)

  useLayoutEffect(() => {
    if (sessionStorage.getItem('state')) {
      setCount(parseInt(sessionStorage.getItem('state')))
    } else {
      sessionStorage.setItem('state', count.toString())
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem('state', count.toString())
  }, [count])

  return (
    <>
      <p></p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
   </>
 )
}