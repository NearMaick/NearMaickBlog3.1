import styles from "../../styles/components/video/video-card.styles.module.scss";

interface IProps {
  videoId: string;
}

export function VideoCard({ videoId }: IProps) {
  return (
    <>
      <section className={styles.box}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?showinfo=0&rel=0&fs=0`}
        />
      </section>
    </>
  );
}
