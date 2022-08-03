import React from 'react';
import {Control, Controller,FieldValues} from'react-hook-form';
import {ErrorInput} from '../ErrorInput';

import {InputCustomMask, Props as InputCustomMaskProps } from '../../components/InputCustomMask';

interface Props extends InputCustomMaskProps{
  control:Control;
  name:string;
  error:FieldValues;
}

export function InputFormMask({
  control,
  name,
  error,
  iconName,
  ...rest
}:Props){
  return (
    <>
      <Controller 
        control={control}
        render={({field:{onChange, onBlur,value}})=>(
          <InputCustomMask
            iconName={iconName}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
      {
          !!error && <ErrorInput description={error.message}/>
      }
    </>
  );
}