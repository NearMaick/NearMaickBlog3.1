import styles from "../../styles/components/about/skills-list.styles.module.scss";

export function SkillsList() {
  return (
    <div className={styles.skillsContainer}>
      <div>
        <img src='images/icon-1.png' alt='image' />
        <h3>html</h3>
      </div>
      <div>
        <img src='images/icon-2.png' alt='image' />
        <h3>css</h3>
      </div>
      <div>
        <img src='/images/icon-3.png' alt='image' />
        <h3>javascript</h3>
      </div>
      <div>
        <img src='/images/icon-4.png' alt='image' />
        <h3>sass</h3>
      </div>
      <div>
        <img src='/images/icon-5.png' alt='image' />
        <h3>jquery</h3>
      </div>
      <div>
        <img src='/images/icon-6.png' alt='image' />
        <h3>react.js</h3>
      </div>
    </div>
  );
}
