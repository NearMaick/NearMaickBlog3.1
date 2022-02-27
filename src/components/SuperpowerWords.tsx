import styles from "../styles/components/superpower-words.module.scss";
import { useTypedSuperpower } from "./useTypedSuperpower";

const superpowers = [
  "JavaScript Back-end developer",
  "JavaScript Web developer",
  "JavaScript Mobile developer",
  "Elixir developer?",
];

export function Superpowers() {
  const superpower = useTypedSuperpower(superpowers);

  return <span className={styles.blinkingCursor}> {superpower}</span>;
}
