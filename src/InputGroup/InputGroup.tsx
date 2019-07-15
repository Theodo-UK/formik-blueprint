import {
  InputGroup as BlueprintInputGroup,
  IInputGroupProps,
  HTMLInputProps
} from "@blueprintjs/core";
import React from "react";

import { FastFieldProps, FieldProps } from "formik";

const InputGroup: React.FunctionComponent<
  FastFieldProps | FieldProps
  & IInputGroupProps & HTMLInputProps
>
  = ({ field,
    form,
    ...props }) => {
    return (<BlueprintInputGroup {...field} {...props} />);
  };

export default InputGroup;
