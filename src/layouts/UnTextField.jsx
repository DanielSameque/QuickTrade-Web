import { useEffect, useState } from "react";
import { TextField } from "@mui/material"
import { useField } from "@unform/core";

export const UnTextField = ({ name }) => {
  const { fieldName, registerField, defaultValue, error, clearError } = useField(name);

  const [value, setValue] = useState(defaultValue || '')

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue),
    });
  }, [registerField, fieldName, value]);

  return (
    <TextField
      error={!!error}
      helperText={error}
      defaultValue={defaultValue}

      value={value}
      onChange={e => setValue(e.target.value)}

      onKeyDown={() => error ? clearError() : undefined}
    />
  );
};

export default UnTextField 