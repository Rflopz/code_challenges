import { useCallback, useState } from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { useDebouncer } from "../hooks/useDebouncer";

const TextField = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: 1px solid lightgray;
  font-size: 25px;
  border-radius: 10px;
`;

export default function InputDebouncer({ effect, delay }) {
  const [value, setValue] = useState();
  const context = this;

  const debounce = useCallback(() => {
    if (value && value.trim() !== "") effect.apply(context, [value]);
  }, [effect, value, context]);

  useDebouncer(debounce, [value], delay || 1000);

  return (
    <TextField
      onChange={(e) => setValue(e.target.value)}
      placeholder="Start typing to debounce"
    />
  );
}

InputDebouncer.propTypes = {
  effect: propTypes.func.isRequired,
  delay: propTypes.number
};
