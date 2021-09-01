/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { ReactElement } from "react";
import { CourseModel } from "../../types/course";
import styles from "./CourseCard.module.scss";

import Link from "next/link";

export default function CourseCard({
  porcentage,
  title,
  id,
}: CourseModel): ReactElement {
  const porcTotal = `${porcentage * 100}%`;
  const isComplete = porcentage === 1;

  return (
    <Link href={`/subjects/${id}?open=1`} passHref>
      <motion.a
        id="link"
        whileTap={{ scale: 0.95 }}
        className={`${styles.card} ${isComplete && styles.complete}`}
      >
        <div className={styles.header}>
          <div className={styles.info}>
            <div>Progresso</div>
            <div id="progress">{porcTotal}</div>
          </div>
          <div className={styles.progress}>
            <motion.div
              initial={{ width: `0%` }}
              animate={{ width: porcTotal }}
              transition={{
                duration: 0.3,
              }}
              className={styles.total}
            />
          </div>
        </div>
        <div className={styles.title_container}>
          <span id="title" className={styles.title}>
            {title}
          </span>
          <img
            id="indicator"
            src={isComplete ? "/done.svg" : "/next.svg"}
            alt=""
          />
        </div>
      </motion.a>
    </Link>
  );
}
