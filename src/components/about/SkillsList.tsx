import styles from "../../styles/components/about/skills-list.styles.module.scss";

export function SkillsList() {
  return (
    <div className={styles.skillsContainer}>
      <div>
        <img src='assets/images/icon-1.png' alt='image' />
        <h3>html</h3>
      </div>
      <div>
        <img src='assets/images/icon-2.png' alt='image' />
        <h3>css</h3>
      </div>
      <div>
        <img src='assets/images/icon-3.png' alt='image' />
        <h3>javascript</h3>
      </div>
      <div>
        <img src='assets/images/icon-4.png' alt='image' />
        <h3>sass</h3>
      </div>
      <div>
        <img src='assets/images/icon-5.png' alt='image' />
        <h3>typescript</h3>
      </div>
      <div>
        <img src='assets/images/icon-6.png' alt='image' />
        <h3>react.js</h3>
      </div>
      <div>
        <img src='assets/images/icon-7.png' alt='image' />
        <h3>react native</h3>
      </div>
      <div>
        <img src='assets/images/icon-8.png' alt='image' />
        <h3>NodeJs</h3>
      </div>
      <div>
        <img src='assets/images/icon-9.png' alt='image' />
        <h3>nextjs</h3>
      </div>
    </div>
  );
}
