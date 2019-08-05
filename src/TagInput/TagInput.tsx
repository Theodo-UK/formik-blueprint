import {
  TagInput as BlueprintTagInput,
  ITagInputProps,
  TagInputAddMethod,
} from '@blueprintjs/core';
import React from 'react';
import { FieldArrayTypes } from 'src/types';

type PropTypes = FieldArrayTypes & ITagInputProps;

function TagInput(props: PropTypes): React.ReactElement {
  const { push, remove, form, name, ...restProps } = props;
  const handleAdd = (values: string[], method: TagInputAddMethod) => {
    values.map(value => push(value));
  };
  const handleRemove = (value: string, index: number) => remove(index);
  return (
    <BlueprintTagInput
      {...restProps}
      onAdd={handleAdd}
      onRemove={handleRemove}
      values={form.values[name] ? form.values[name] : []}
    />
  );
}

export default TagInput;
