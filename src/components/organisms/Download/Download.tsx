import React, { ReactElement } from "react";
import DownloadCardGrid from "../../molecules/DownloadCardGrid";
import styles from "./Download.module.scss";

export default function Download(): ReactElement {
  const { download_container, title } = styles;

  return (
    <div className={download_container}>
      <h3 className={title}>Baixar</h3>
      <DownloadCardGrid />
    </div>
  );
}
