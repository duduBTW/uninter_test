import { ReactElement } from "react";
import styles from "./Section.module.scss";

interface Props {
  children: ReactElement;
}

export default function Section({ children }: Props): ReactElement {
  return <div className={styles.section}>{children}</div>;
}
