import Link from "next/link";
import React, { ReactElement } from "react";
import styles from "./DownloadCard.module.scss";

interface Props {
  label: string;
  downloadUrl: string;
}

export default function DownloadCard({
  label,
  downloadUrl,
}: Props): ReactElement {
  const { download_wrapper, download_label, link } = styles;

  return (
    <Link href={downloadUrl} passHref>
      <a className={link} target="_blank">
        <div className={download_wrapper}>
          <img src="/Download.svg" alt="" />
          <div className={download_label}>{label}</div>
        </div>
      </a>
    </Link>
  );
}
