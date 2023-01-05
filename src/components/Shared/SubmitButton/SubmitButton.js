import React from "react";
import { useFormikContext } from 'formik';
import classNames from "classnames";


const SubmitButton = (props) => {
  const { title, formikProps, canHaveDisplayHorizontal, ...rest } = props;

  const { isSubmitting } = useFormikContext();
  const disabled = formikProps ? !formikProps.dirty : isSubmitting;

  return (
    <button
      type="submit"
      className={classNames("submit btn", disabled ? "btn-disabled" : '')}
      {...rest}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default SubmitButton;