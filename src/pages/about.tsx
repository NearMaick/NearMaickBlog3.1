import { NextPage } from "next";
import Head from "next/head";

import { InfoCard } from "../components/about/InfoCard";
import { ProjectCount } from "../components/about/ProjectCount";
import { SkillsList } from "../components/about/SkillsList";
import { Heading } from "../components/Heading";

import styles from "../styles/pages/About.module.scss";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>nearmaick.dev.br | Sobre</title>
        <meta name='description' content='Sobre mim... | blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section>
        <Heading title='sobre' subtitle='mim' />
        <div className={styles.row}>
          <InfoCard />
          <ProjectCount />
        </div>
      </section>
      <section>
        <Heading title='minhas habilidades' subtitle='técnicas' />
        <SkillsList />
      </section>
      <section></section>
    </>
  );
};

export default About;
