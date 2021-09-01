/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import { MenuItemOptionModal } from "../../types/menu";
import styles from "./MenuOptions.module.scss";

interface Props {
  options: MenuItemOptionModal[];
  active?: number;
}

export default function MenuOptions({ options, active }: Props): ReactElement {
  const {
    menu_options_wrapper,
    content,
    menu_label,
    menu_icon,
    menu_item_selected,
    completed,
    time,
    header,
  } = styles;

  return (
    <motion.div
      layout
      className={menu_options_wrapper}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.15,
        },
      }}
      exit={{ opacity: 0 }}
    >
      {options.map(({ isCompleted, label, icon }, index) => (
        <div
          className={`${content} ${active === index && menu_item_selected}`}
          key={label}
        >
          <div className={header}>
            <img className={menu_icon} src={icon} alt="" />
            <div className={`${menu_label}  ${isCompleted && completed}`}>
              {label}
            </div>
          </div>
          {!isCompleted ? (
            <div className={time}>7 dias</div>
          ) : (
            <img className="" src="/done_2.svg" alt="" />
          )}
        </div>
      ))}
    </motion.div>
  );
}
