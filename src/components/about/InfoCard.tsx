import { FaDownload } from "react-icons/fa";

import styles from "../../styles/components/about/info-card.styles.module.scss";
import { LinkButton } from "../LinkButton";

export function InfoCard() {
  return (
    <div className={styles.infoContainer}>
      <h1>informações pessoais</h1>
      <div className={styles.boxContainer}>
        <div>
          <h3>
            <span>nome : </span>Maick Souza
          </h3>
          <h3>
            <span>email : </span>maick_a_s@msn.com
          </h3>
        </div>
        <div>
          <h3>
            <span>habilidades : </span>Full-stack
          </h3>
        </div>
      </div>
      <LinkButton
        link='https://docs.google.com/document/d/1wvEp_XyjUz4VW5-op63jxbXtus_zVgTbcSFV_czDTsc/edit?usp=sharing'
        description='Baixar CV'
        icon={FaDownload}
      />
    </div>
  );
}
