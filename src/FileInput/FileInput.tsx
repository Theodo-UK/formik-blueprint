import {
  FileInput as BlueprintFileInput,
  IFileInputProps,
} from '@blueprintjs/core';
import React from 'react';
import { FieldTypes } from 'src/types';

type PropTypes = FieldTypes & IFileInputProps;

function FileInput({
  field,
  form,
  inputProps,
  ...props
}: PropTypes): React.ReactElement {
  const { onChange, ...restInputProps } = inputProps || { onChange: undefined };
  const handleFileChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChange && onChange(event);
    const file = event.currentTarget.files
      ? event.currentTarget.files[0]
      : undefined;
    form.setFieldValue(field.name, file);
    form.setFieldTouched(field.name, true);
  };
  return (
    <BlueprintFileInput
      {...field}
      {...props}
      inputProps={{ ...restInputProps, onChange: handleFileChange }}
      onInputChange={handleFileChange}
    />
  );
}

export default FileInput;
