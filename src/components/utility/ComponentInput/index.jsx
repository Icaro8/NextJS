import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";
import style from './style.module.scss'
export function InputComponent({ name, type, placeholder, label, ...rest }) {
  const inputRef = useRef();
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [registerField, fieldName]);
  return (
    <div className={style.Container}>
      <label htmlFor={name}>{label}</label>
      <input
        ref={inputRef}
        name={name}
        type={type}
        placeholder={placeholder}
        id={name}
        {...rest}
      />
    </div>
  );
}
