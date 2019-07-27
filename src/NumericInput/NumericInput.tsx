import {
  NumericInput as BlueprintNumericInput,
  HTMLInputProps,
  INumericInputProps,
} from '@blueprintjs/core';
import React from 'react';
import { FieldTypes } from 'src/types';

type PropTypes = FieldTypes & HTMLInputProps & INumericInputProps & { setValueAsString?: boolean };

function NumericInput({
  field: { onChange, ...restField },
  form,
  setValueAsString,
  ...props
}: PropTypes): React.ReactElement {
  const handleValueChange = (valueAsNumber: number, valueAsString: string): void => {
    const value = setValueAsString ? valueAsString : valueAsNumber;
    form.setFieldValue(restField.name, value);
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
