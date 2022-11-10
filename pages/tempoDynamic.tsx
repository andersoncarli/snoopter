
import { useState, useEffect } from "react";

const useFormattedDate = (date) => { // https://stackoverflow.com/a/73006128/9464885
  const [r, setFormattedDate] = useState(null);

  useEffect(
    () => setFormattedDate(new Date(date).toLocaleString("en-US")), []
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