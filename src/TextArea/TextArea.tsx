import {
  TextArea as BlueprintTextArea,
  ITextAreaProps,
} from '@blueprintjs/core';
import React from 'react';

import { FastFieldProps, FieldProps } from 'formik';

type PropTypes = FastFieldProps | FieldProps & ITextAreaProps;

function TextArea({ field, form, ...props }: PropTypes): React.ReactElement {
  return <BlueprintTextArea {...field} {...props} />;
}

export default TextArea;
