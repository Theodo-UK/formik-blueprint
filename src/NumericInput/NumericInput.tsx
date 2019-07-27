import {
  NumericInput as BlueprintNumericInput,
  HTMLInputProps,
  INumericInputProps,
} from '@blueprintjs/core';
import React from 'react';

import { FastFieldProps, FieldProps } from 'formik';

type PropTypes =
  | FastFieldProps
  | FieldProps & HTMLInputProps & INumericInputProps;

function NumericInput({
  field: { onChange, ...restField },
  form,
  ...props
}: PropTypes): React.ReactElement {
  const handleValueChange = (valueAsNumber: number): void => {
    form.setFieldValue(restField.name, valueAsNumber);
    form.setFieldTouched(restField.name, true);
  };
  return (
    <BlueprintNumericInput
      {...restField}
      {...props}
      onValueChange={handleValueChange}
    />
  );
}

export default NumericInput;
