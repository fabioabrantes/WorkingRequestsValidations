import React from 'react';
import {InputCustom,Props as InputCustomProps} from '../InputCustom';
import {Control, Controller,FieldValues} from'react-hook-form';
import {ErrorInput} from '../ErrorInput';

interface Props extends InputCustomProps{
  control:Control;
  name:string;
  error:FieldValues;
}
export function InputForm({
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
          <InputCustom 
            iconName = {iconName}
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