import type { NextPage } from "next";
import Head from "next/head";
import { LinkButton } from "../components/LinkButton";
import { FaUser } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>nearmaick.dev.br | Início</title>
        <meta name='description' content='Bem vindo ao meu portal | blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section>
        <div>
          <img src='https://github.com/nearmaick.png' alt='Maick Souza Foto' />
        </div>

        <div>
          <h3>Olá, sou maick souza</h3>
          <span>JavaScript FullStack Developer</span>
          <p>
            Uma pessoa disciplinada que sempre busca sua melhor versão amanhã.
          </p>
          <LinkButton link='/about' description='Sobre Mim' icon={FaUser} />
        </div>
      </section>
    </>
  );
};

export default Home;
