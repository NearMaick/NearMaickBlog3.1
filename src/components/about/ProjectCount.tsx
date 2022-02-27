import styles from "../../styles/components/about/project-count.styles.module.scss";

interface IProps {
  id: string;
  title: string;
  subtitle: string;
}

const projectData = [
  { id: "1", title: "1+", subtitle: "Construindo páginas como esta" },
] as IProps[];

export function ProjectCount() {
  return (
    <div className={styles.countContainer}>
      {projectData.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
