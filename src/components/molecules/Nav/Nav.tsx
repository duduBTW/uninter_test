import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";
import styles from "./Nav.module.scss";

interface Props {
  title: string;
  backLink?: string;
}

export default function Nav({ title, backLink }: Props): ReactElement {
  const { nav_wrapper, nav_title, header } = styles;

  return (
    <div className={nav_wrapper}>
      <div className={header}>
        {backLink && (
          <Link href={backLink} passHref>
            <a>
              <Image height={16} width={16} alt="back" src="/back.svg" />
            </a>
          </Link>
        )}
        <div className={nav_title}>{title}</div>
      </div>
    </div>
  );
}
