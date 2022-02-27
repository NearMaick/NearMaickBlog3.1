import styles from "../styles/components/heading.styles.module.scss";

type HeadingProps = {
  title: string;
  subtitle?: string;
};

export function Heading({ title, subtitle }: HeadingProps) {
  return (
    <h1 className={styles.heading}>
      {title} <span>{subtitle}</span>
    </h1>
  );
}
