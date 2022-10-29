import * as React from "react";
import { useInput } from "@mui/base";
import { styled } from "@mui/system";
import { unstable_useForkRef as useForkRef } from "@mui/utils";

const StyledInputElement = styled("input")`
  border: none;
  background-color: #e6e6e6;
  border-radius: 30px;
  width: 300px;
  height: 40px;
  padding: 2%;
  margin-bottom: 5px;
  padding-left: 10px;
  ::-webkit-input-placeholder {
    padding-left: 6px;
  }
  :focus {
    outline: none;
  }
`;

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { getRootProps, getInputProps } = useInput(props);

  const inputProps = getInputProps();

  // Make sure that both the forwarded ref and the ref returned from the getInputProps are applied on the input element
  inputProps.ref = useForkRef(inputProps.ref, ref);

  return (
    <div {...getRootProps()}>
      <StyledInputElement {...props} {...inputProps} />
    </div>
  );
});

export default function UseInput() {
  const [password, setPassword] = React.useState("");
  
  return (
    <CustomInput
      type="password"
      placeholder="password"
      onChange={(e) => setPassword(e.target.value)}
    />
  );
}
