import React, { ReactElement } from "react";
import styles from "./Input.module.scss";

export default function Input({
  inputProps,
}: {
  inputProps: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}): ReactElement {
  const { input_wrapper } = styles;

  return <input {...inputProps} className={input_wrapper} type="text" />;
}
