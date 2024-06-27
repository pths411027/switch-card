"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Page.module.css";
import { frameworks, defaultText } from "./config";
export default function Home() {
  const [showIndex, setShowIndex] = useState(0);

  return (
    <main className={styles.container}>
      <div className={styles.title}>{defaultText}</div>
      <div className={styles.card_container}>
        <div className={styles.img_container}>
          <img
            key={showIndex}
            className={styles.img}
            src={`./img/${frameworks[showIndex].title}.jpeg`}
          />
        </div>
        <motion.div
          key={`topic_${showIndex}`}
          className={styles.topic}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {frameworks[showIndex].title}
        </motion.div>
        <motion.div
          key={`des_${showIndex}`}
          className={styles.des}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {frameworks[showIndex].des}
        </motion.div>
        <div className={styles.dots_container}>
          {frameworks.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot}`}
              style={{
                width: showIndex === index ? "30px" : "10px",
                opacity: showIndex === index ? 1 : 0.5,
              }}
            ></div>
          ))}
          <div
            className={styles.button}
            onClick={() => {
              setShowIndex((showIndex + 1) % frameworks.length);
            }}
          >
            next
          </div>
        </div>
      </div>
    </main>
  );
}
