import {
  NumericInput as BlueprintNumericInput,
  HTMLInputProps, INumericInputProps
} from "@blueprintjs/core";
import React from "react";

import { FastFieldProps, FieldProps } from "formik";

const NumericInput: React.FunctionComponent<
  FastFieldProps | FieldProps
  & HTMLInputProps & INumericInputProps
>
  = ({ field: { onChange, ...restField },
    form,
    ...props }) => {
    const handleValueChange = (valueAsNumber: number) => {
      form.setFieldValue(restField.name, valueAsNumber);
      form.setFieldTouched(restField.name, true);
    };
    return (<BlueprintNumericInput {...restField} {...props} onValueChange={handleValueChange} />);
  };

export default NumericInput;
