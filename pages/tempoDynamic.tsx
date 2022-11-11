
import { useState, useEffect } from "react";

const useFormattedDate = (date: any) => { // https://stackoverflow.com/a/73006128/9464885
  const [r, setFormattedDate] = useState('');

  useEffect(() => {
    let d = new Date(date)
      , s = d.toLocaleString("en-US")
      setFormattedDate(s)
      //eslint-disable-next-line
  }, []
  );

  return r;
};


function Tempo() {
  const date = new Date()
  const dateString = useFormattedDate(date)

  return (
    <div>{dateString} (dinamico) </div>
  )
}

export default Tempo