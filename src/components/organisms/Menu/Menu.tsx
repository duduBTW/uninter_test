import { AnimateSharedLayout, motion } from "framer-motion";
import React, { ReactElement } from "react";
import MenuItem from "../../molecules/MenuItem";
import { MenuItemModel } from "../../types/menu";
import styles from "./Menu.module.scss";

interface Props {
  mobileOpen: boolean;
}

export default function Menu({ mobileOpen }: Props): ReactElement {
  const { menu_wrapper, menuOpen } = styles;

  const items: MenuItemModel[] = [
    {
      progress: 1,
      label: "Nivel 1",
      options: [
        {
          label: "Explicação",
          icon: "/Video.svg",
          isCompleted: true,
        },
        {
          label: "Apenda mais",
          icon: "/Paper Plus.svg",
          isCompleted: true,
        },
      ],
    },
    {
      progress: 0.75,
      label: "Distribuição física",
      active: 0,
      options: [
        {
          label: "Explicação",
          icon: "/Video.svg",
          isCompleted: true,
        },
        {
          label: "Apenda mais",
          icon: "/Paper Plus.svg",
          isCompleted: true,
        },
        {
          label: "Exercícios",
          icon: "/Work.svg",
          isCompleted: false,
        },
      ],
    },
    {
      progress: 0.3,
      label: "Nivel 3",
      options: [
        {
          label: "Teste",
          icon: "/Video.svg",
          isCompleted: true,
        },
        {
          label: "Teste",
          icon: "/Document.svg",
          isCompleted: false,
        },
        {
          label: "Teste",
          icon: "/Document.svg",
          isCompleted: false,
        },
      ],
    },
  ];

  return (
    <AnimateSharedLayout>
      <motion.div
        layout
        className={`${menu_wrapper} ${mobileOpen && menuOpen}`}
      >
        {items.map((item, index) => (
          <MenuItem index={String(index)} key={item.label} menuItem={item} />
        ))}
      </motion.div>
    </AnimateSharedLayout>
  );
}
