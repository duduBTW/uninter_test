import { AnimatePresence, motion } from "framer-motion";
import React, { ReactElement, useEffect, useState } from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { MenuItemModel } from "../../types/menu";
import styles from "./MenuItem.module.scss";
import Image from "next/image";
import MenuOptions from "../../elements/MenuOptions/MenuOptions";
import { useRouter } from "next/router";

interface Props {
  menuItem: MenuItemModel;
  index: string;
}

export default function MenuItem({
  menuItem: { progress, label, options, active },
  index,
}: Props): ReactElement {
  const { query } = useRouter();

  const {
    menu_item,
    title,
    left,
    progress_container,
    progress_text,
    header,
    menu_item_completed,
    menu_item_open,
  } = styles;
  console.log(`query.open`, query.open);

  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((o) => !o);

  useEffect(() => {
    if (query.open == index) setOpen(true);
  }, [index, query.open]);

  const isCompleted = progress === 1;

  return (
    <motion.div
      layout
      className={`${menu_item} ${isCompleted && menu_item_completed} ${
        open && menu_item_open
      }`}
    >
      <motion.div onClick={() => toggleOpen()} layout className={header}>
        <div className={left}>
          <div className={progress_container}>
            <CircularProgressbarWithChildren
              value={progress}
              maxValue={1}
              styles={buildStyles({
                pathColor: `#BBEFC0`,
                textColor: "#188823",
                trailColor: "#EDEDED",
              })}
            >
              <div className={progress_text}>
                {isCompleted ? (
                  <Image width={15} height={15} src={"/done.svg"} alt="" />
                ) : (
                  <strong>{progress * 100}%</strong>
                )}
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div className={title}>{label}</div>
        </div>
        <motion.img
          animate={{ rotate: !open ? "0deg" : "180deg" }}
          src="/expand_more.svg"
          alt=""
        />
      </motion.div>
      <AnimatePresence>
        {open && <MenuOptions active={active} options={options} />}
      </AnimatePresence>
    </motion.div>
  );
}
