import React, { ReactElement } from "react";
import Nav from "../../molecules/Nav";

interface Props {
  children: ReactElement;
  title: string;
  backLink?: string;
}

export default function Layout({ children, ...rest }: Props): ReactElement {
  return (
    <div>
      <Nav {...rest} />
      {children}
    </div>
  );
}
