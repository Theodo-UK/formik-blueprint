import {
  InputGroup as BlueprintInputGroup,
  IInputGroupProps,
  HTMLInputProps,
} from '@blueprintjs/core';
import React from 'react';
import { FastFieldProps, FieldProps } from 'formik';

type PropTypes =
  | FastFieldProps
  | FieldProps & IInputGroupProps & HTMLInputProps;

function InputGroup({ field, form, ...props }: PropTypes): React.ReactElement {
  return <BlueprintInputGroup {...field} {...props} />;
}

export default InputGroup;
