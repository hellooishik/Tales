// Custom Hooks Buliding

import { useState } from "react";

export function useFormInput(intialValue) {
  const [vaule, setVaule] = useState(intialValue);
  function handleChange(e) {
    setVaule(e.target.value);
  }
  return {
    value: vaule || intialValue,
    onChange: handleChange,
  };
}
