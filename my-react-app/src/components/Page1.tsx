import { useState, useEffect } from "react";

function Page1(props: {}) {
  const [value, setValue] = useState();

  useEffect(() => {
    console.log("with dependency array");
  }, []);
  return (
    <div>
      <h1>Page 1</h1>
    </div>
  );
}

export default Page1;
