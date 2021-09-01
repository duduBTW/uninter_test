import React, { ReactElement, useState } from "react";
import ReactPlayer from "react-player";
import Content from "../../elements/Content";
import Section from "../../elements/Section";
import Tabs from "../../elements/Tabs/Tabs";
import Download from "../../organisms/Download";
import Layout from "../../organisms/Layout";
import Menu from "../../organisms/Menu";
import Questions from "../../organisms/Questions";
import styles from "./SubjectItem.module.scss";

export default function SubjectItemTemplate(): ReactElement {
  const {
    subject_item_wrapper,
    content,
    menu,
    sub_title,
    player_overlay,
    menu_mobile_idinator,
    open,
  } = styles;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Layout backLink="/subjects" title="Logística Internacional">
      <>
        <div className={subject_item_wrapper}>
          <Section>
            <>
              <div className={content}>
                <h1>
                  Explicação{" "}
                  <span className={sub_title}>(Distribuição física)</span>
                </h1>

                {/* 
                // Deveria ser um componente de video, mas é so uma imagem como placeholder 
                */}
                <img className={player_overlay} src="/videoPlaceholder.png" />

                <Tabs
                  content={[
                    <Content key={1} />,
                    <Download key={2} />,
                    <Questions key={3} />,
                  ]}
                  tabs={["Conteudo", "Materiais", "Faça perguntas"]}
                />
              </div>
              <div className={`${menu} ${menuOpen && open}`}>
                <Menu mobileOpen={menuOpen} />
              </div>
            </>
          </Section>
        </div>

        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className={menu_mobile_idinator}
        >
          <img src="/Filter.svg" alt="" />
        </div>
      </>
    </Layout>
  );
}
