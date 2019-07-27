import {
  TextArea as BlueprintTextArea,
  ITextAreaProps,
} from '@blueprintjs/core';
import React from 'react';
import { FieldTypes } from 'src/types';

type PropTypes = FieldTypes & ITextAreaProps;

function TextArea({ field, form, ...props }: PropTypes): React.ReactElement {
  return <BlueprintTextArea {...field} {...props} />;
}

export default TextArea;
