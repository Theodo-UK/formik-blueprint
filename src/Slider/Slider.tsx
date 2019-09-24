import {
    Slider as BlueprintSlider,
    HTMLInputProps,
    ISliderProps,
  } from '@blueprintjs/core';
  import React from 'react';
  import { FieldTypes } from 'src/types';
  
  type PropTypes = FieldTypes & HTMLInputProps & ISliderProps;
  
  function Slider({
    field: { onChange, ...restField },
    form,
    ...props
  }: PropTypes): React.ReactElement {
    const handleChange = (value:number): void => {
      form.setFieldValue(restField.name, value);
      form.setFieldTouched(restField.name, true);
    };
    return (
      <BlueprintSlider
        {...restField}
        {...props}
        onChange={handleChange}
      />
    );
  }
  
  export default Slider;
  