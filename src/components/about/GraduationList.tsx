import { FaGraduationCap } from "react-icons/fa";

import { Heading } from "../Heading";
import styles from "./../../styles/components/about/graduation-list.styles.module.scss";

export function GraduationList() {
  return (
    <div className={styles.graduationContainer}>
      <Heading title='minhas' subtitle='qualificações' />
      <div>
        <i>
          <FaGraduationCap />
        </i>
        <span>2019 - ...</span>
        <h3>Acompnhando com vigor a Rocketseat</h3>
        <p>
          Aprendendo tudo sobre o ecossistema Javascript (NodeJS, ReactJS, React
          Native) e, em breve, explorando o mundo do elixir...
        </p>
      </div>

      <div>
        <i>
          <FaGraduationCap />
        </i>
        <span>2011 - 2015</span>
        <h3>Graduado em sistemas de informação</h3>
        <p>
          Antigamente, as ferramentas eram mais limitadas e a documentação
          escassa, hoje temos abundância de conteúdo, mas é necessário foco!
        </p>
      </div>
    </div>
  );
}
