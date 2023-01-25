import { useState, useEffect } from "react";

function Page1(props: { count: number; countHandler: (arg0: number) => void }) {
  const [value, setValue] = useState(props.count);
  const [value2, setValue2] = useState(201);

  useEffect(() => {
    addUp(1);
    console.log("with dependency array");
    console.log(value2);
    setValue2((previousValue) => previousValue + 1);
    addUp(1);
  }, [value]);

  const addUp = (value: number) => {
    props.countHandler(value);
  };
  return (
    <div>
      <h1>Page 1</h1>
      <h1>{value}</h1>
      <h1>{value2}</h1>
    </div>
  );
}

export default Page1;
