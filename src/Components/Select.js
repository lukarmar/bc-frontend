import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import propTypes from 'prop-types';

export default function Select({ name, label, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <label htmlFor={fieldName}>{label}</label>

      <select
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span className="error">{error}</span>}
    </>
  );
}

Select.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string,
};

Select.defaultProps = {
  label: null,
};
