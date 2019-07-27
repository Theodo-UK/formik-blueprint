import {
  InputGroup as BlueprintInputGroup,
  IInputGroupProps,
  HTMLInputProps,
} from '@blueprintjs/core';
import React from 'react';
import { FieldTypes } from 'src/types';

type PropTypes = FieldTypes & IInputGroupProps & HTMLInputProps;

function InputGroup({ field, form, ...props }: PropTypes): React.ReactElement {
  return <BlueprintInputGroup {...field} {...props} />;
}

export default InputGroup;
