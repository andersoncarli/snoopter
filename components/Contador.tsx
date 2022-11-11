import { useState, useEffect } from 'react'

function Contador() {
  const [contador, setContador] = useState(1)

  useEffect(() => { // fired on State changes
    document.title = `You clicked ${contador} times`;
  });

  return (
    <div>
      <div>{contador}</div>
      <button onClick={mais1}>Adicionar</button>
    </div>
  )

  function mais1() {
    setContador(contador + 2)
  }
}

export default Contador