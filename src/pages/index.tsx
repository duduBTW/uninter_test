import { motion } from "framer-motion";
import type { NextPage } from "next";
import Link from "next/link";
import React from "react";

const Home: NextPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Teste unicamp
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.4 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Criado por: <b>Carlos Eduardo Alves do Nascimento</b>{" "}
      </motion.p>
      <Link href="/subjects">Ir para o projeto</Link>
    </div>
  );
};

export default Home;
