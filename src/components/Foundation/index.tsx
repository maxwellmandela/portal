import React, { useEffect, useRef, useState } from "react";
import styles from "@site/src/components/Foundation/index.module.css";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import RightArrowSVG from "@site/static/img/svgIcons/rightArrowIcon.svg";
import DownloadSVG from "@site/static/img/svgIcons/download.svg";
import DomPhoto from "@site/static/img/Foundation/TeamPhotos/Dom.jpeg";
import EvaPhoto from "@site/static/img/Foundation/TeamPhotos/Eva.jpeg";
import GianPhoto from "@site/static/img/Foundation/TeamPhotos/Gian.jpeg";
import JanPhoto from "@site/static/img/Foundation/TeamPhotos/Jan.jpeg";
import SamuelPhoto from "@site/static/img/Foundation/TeamPhotos/Samuel.jpeg";
import LeePhoto from "@site/static/img/Foundation/TeamPhotos/Lee.jpeg";
import AislingPhoto from "@site/static/img/Foundation/TeamPhotos/Aisling.jpeg";
import ArtemPhoto from "@site/static/img/Foundation/TeamPhotos/Artem.jpeg";
import DiegoPhoto from "@site/static/img/Foundation/TeamPhotos/Diego.jpeg";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const container = {
  hidden: { opacity: 0, transition: { duration: 1 } },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stats = [
  { title: "Team Members", value: "260+" },
  { title: "Publications", value: "1564" },
  { title: "Citations", value: "83,347" },
  { title: "Patents", value: "191" },
];

const cards = [
  {
    isMain: true,
    title: ["Roadmap"],
    body: "The DFINITY Foundation’s contributions to the IC roadmap are subject to community discussion and voting",
    link: "/",
  },
  {
    isMain: false,
    title: ["Internet Computer Infographic"],
    body: "A beautiful dream emerged in 2014. One team set itself to realizing that dream.",
    link: "/",
  },
  {
    isMain: false,
    title: ["IC for Geek", "White Paper"],
    body: "v1.2 February 14, 2022",
    link: "/",
  },
];

function Card({ isMain, title, body, link }) {
  return (
    <a
      href={link}
      className={clsx(styles.card, styles.cardHover, isMain && styles.mainCard)}
    >
      <div className={styles.cardBodyContainer}>
        {title.map((titleLine) => (
          <p className={styles.cardTitle}>{titleLine}</p>
        ))}
        <p className={styles.cardBody}>{body}</p>
      </div>
      {isMain ? (
        <RightArrowSVG className={styles.cardIcon} />
      ) : (
        <DownloadSVG className={styles.cardIcon} />
      )}
    </a>
  );
}

function Foundation() {
  const controls = useAnimation();
  const divRef = useRef(null);
  const [currentYScroll, setCurrentYScroll] = useState(400);

  const { ref, inView } = useInView({ threshold: 0 });
  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
  const scrollHandler = () => {
    const { y, height } = divRef.current.getBoundingClientRect();
    if (y <= 400 && -y <= height) {
      setCurrentYScroll(y);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={container}
      className={styles.main}
    >
      <a id="foundation" />
      <div ref={divRef} className={styles.container}>
        <div className={clsx(styles.teamPhotos, styles.teamPhotosBase)}>
          <motion.img
            src={DomPhoto}
            style={{ y: currentYScroll * 0.3 }}
            className={clsx(styles.teamPhoto, styles.photo1)}
            alt=""
          />
          <motion.img
            src={EvaPhoto}
            style={{ y: currentYScroll * 0.3 }}
            className={clsx(styles.teamPhoto, styles.photo2)}
            alt=""
          />
          <motion.img
            src={JanPhoto}
            style={{ y: currentYScroll * 0.3 }}
            className={clsx(styles.teamPhoto, styles.photo3)}
            alt=""
          />
        </div>

        <div className={clsx(styles.teamPhotos, styles.teamPhotosBack)}>
          <motion.img
            src={GianPhoto}
            style={{ y: currentYScroll * 0.25, scale: 0.8 }}
            className={clsx(styles.teamPhoto, styles.photo4)}
            alt=""
          />
          <motion.img
            src={SamuelPhoto}
            style={{ y: currentYScroll * 0.25, scale: 0.8 }}
            className={clsx(styles.teamPhoto, styles.photo5)}
            alt=""
          />
          <motion.img
            src={LeePhoto}
            style={{ y: currentYScroll * 0.25, scale: 0.8 }}
            className={clsx(styles.teamPhoto, styles.photo6)}
            alt=""
          />
        </div>

        <div className={clsx(styles.teamPhotos, styles.teamPhotosDeep)}>
          <motion.img
            src={AislingPhoto}
            style={{ y: currentYScroll * 0.2, scale: 0.6 }}
            className={clsx(styles.teamPhoto, styles.photo7)}
            alt=""
          />
          <motion.img
            src={ArtemPhoto}
            style={{ y: currentYScroll * 0.2, scale: 0.6 }}
            className={clsx(styles.teamPhoto, styles.photo8)}
            alt=""
          />
          <motion.img
            src={DiegoPhoto}
            style={{ y: currentYScroll * 0.2, scale: 0.6 }}
            className={clsx(styles.teamPhoto, styles.photo9)}
            alt=""
          />
        </div>
        <div className={styles.title}>Blockchain’s largest R&D operation</div>
        <div className={styles.statsContainer}>
          {stats.map((stat) => (
            <div className={styles.stat}>
              <span className={styles.statTitle}>{stat.title}</span>
              <span className={styles.statValue}>{stat.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.mobileStatsContainer}>
          {stats.map((stat, index) => (
            <>
              {index % 2 === 1 && (
                <div className={styles.mobileStatsHorDivider} />
              )}
              <div className={styles.mobileStat}>
                <span className={styles.statTitle}>{stat.title}</span>
                <span className={styles.statValue}>{stat.value}</span>
              </div>
              {index % 2 === 1 && index !== stats.length - 1 && (
                <div className={styles.mobileStatsVerDivider} />
              )}
            </>
          ))}
        </div>
        <div className={styles.body}>
          The DFINITY Foundation is committed to realizing the most disruptive
          vision in tech: the adoption of public blockchain as a single
          technology stack that hosts all of humanity’s systems and services.
        </div>
        <Link className={styles.actionButton} to="/">
          GO TO THE DFINITY FOUNDATION
        </Link>
      </div>
      <motion.div className={styles.mobileSwiper} variants={item}>
        <Swiper
          spaceBetween={8}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide>
              <Card
                isMain={card.isMain}
                title={card.title}
                body={card.body}
                link={card.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <div className={styles.cards}>
        {cards.map((card) => (
          <Card
            isMain={card.isMain}
            title={card.title}
            body={card.body}
            link={card.link}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Foundation;
