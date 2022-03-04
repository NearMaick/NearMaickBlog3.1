import type { NextPage } from "next";
import Head from "next/head";
import { Heading } from "../components/Heading";
import { VideoCard } from "../components/video/VideoCard";

import styles from "../styles/pages/Videos.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>nearmaick.dev.br | Início</title>
        <meta name='description' content='Bem vindo ao meu portal | blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Heading title='Meus' subtitle='Vídeos' />

      <section>
        <div className={styles.blogContainer}>
          <VideoCard videoId='4cXwNWcH6Dc' />
          <VideoCard videoId='EXsURCVAaFo' />
        </div>
      </section>
    </>
  );
};

export default Home;
