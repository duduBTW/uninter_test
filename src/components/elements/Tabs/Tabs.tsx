import { AnimatePresence, motion } from "framer-motion";
import React, { ReactElement, useState } from "react";
import styles from "./Tabs.module.scss";

interface Props {
  content: ReactElement[];
  tabs: string[];
}

export default function Tabs({ content, tabs }: Props): ReactElement {
  const [selected, _setSelected] = useState(0);
  const setSelected = (newSelected: number) => _setSelected(newSelected);

  const { tab_wrapper, tab_header, tab_item, tab_active } = styles;

  return (
    <div className={tab_wrapper}>
      <div className={tab_header}>
        {tabs.map((tab, index) => (
          <div
            className={`${tab_item} ${selected === index && tab_active}`}
            onClick={() => setSelected(index)}
            key={tab}
          >
            {tab}
          </div>
        ))}
      </div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={selected}
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 30, opacity: 0 }}
        >
          {content[selected]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
