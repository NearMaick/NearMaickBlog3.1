import styles from "../../styles/components/about/project-count.styles.module.scss";

interface IProps {
  id: string;
  title: string;
  subtitle: string;
}

const projectData = [
  { id: "1", title: "1+", subtitle: "Construindo páginas como esta" },
  {
    id: "2",
    title: "3+",
    subtitle: "Estudando e desenvolvendo páginas com ReactJs",
  },
  {
    id: "2",
    title: "4+",
    subtitle: "Estudando programação",
  },
] as IProps[];

export function ProjectCount() {
  return (
    <div data-aos='zoom-in' className={styles.countContainer}>
      {projectData.map((project) => (
        <div data-aos='flip-left' key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
