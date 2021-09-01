import React, { ReactElement } from "react";
import Input from "../../elements/Input";
import styles from "./Questions.module.scss";

export default function Questions(): ReactElement {
  const { questions_wrapper, placeholder } = styles;

  return (
    <div className={questions_wrapper}>
      <Input
        inputProps={{
          autoFocus: true,
          type: "text",
          placeholder: "Digite sua duvida aqui...",
        }}
      />

      <h4 className={placeholder}>Outras perguntas/respostas aqui</h4>
    </div>
  );
}
