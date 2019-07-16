import {
  TextArea as BlueprintTextArea,
  ITextAreaProps
} from "@blueprintjs/core";
import React from "react";

import { FastFieldProps, FieldProps } from "formik";

const TextArea: React.FunctionComponent<
  FastFieldProps | FieldProps
  & ITextAreaProps
>
  = ({ field,
    form,
    ...props }) => {
    return (<BlueprintTextArea {...field} {...props} />);
  };

export default TextArea;
