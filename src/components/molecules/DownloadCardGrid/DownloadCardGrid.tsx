import React, { ReactElement } from "react";
import DownloadCard from "../../elements/DownloadCard";
import styles from "./DownloadCardGrid.module.scss";

export default function DownloadCardGrid(): ReactElement {
  const { download_card_grid } = styles;
  const cards = [
    {
      label: "Slides",
      downloadUrl:
        "https://firebasestorage.googleapis.com/v0/b/prosesmt-testes.appspot.com/o/Test.zip?alt=media&token=2a73d6f2-088d-45ff-a515-fa0d25393ddd",
    },
    {
      label: "Conteudo impresso",
      downloadUrl:
        "https://firebasestorage.googleapis.com/v0/b/prosesmt-testes.appspot.com/o/Test.zip?alt=media&token=2a73d6f2-088d-45ff-a515-fa0d25393ddd",
    },
  ];

  return (
    <div className={download_card_grid}>
      {cards.map((card) => (
        <DownloadCard {...card} key={card.label} />
      ))}
    </div>
  );
}
