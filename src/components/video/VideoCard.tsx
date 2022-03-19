import { useEffect, useState } from "react";
import styles from "../../styles/components/video/video-card.styles.module.scss";

interface IProps {
  videoId: string;
}

// const useCountdown = (minute: number) => {
//   const [minutes, setMinutes] = useState(minute);
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setTimeout(() => {
//       if (seconds > 0) {
//         setSeconds(seconds - 1);
//       }
//       if (seconds === 0) {
//         if (minutes === 0) {
//           clearTimeout(interval);
//         } else {
//           setMinutes(minutes - 1);
//           setSeconds(59);
//         }
//       }
//     }, 1000);

//     return () => clearTimeout(interval);
//   }, [seconds, minutes]);

//   const mins = String(minutes);
//   let secs = String(seconds);

//   if (seconds < 10) secs = `0${secs}`;

//   return { mins, secs };
// };

const useCountdown = (minute: number) => {
  const [minutes, setMinutes] = useState(minute);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearTimeout(interval);
        }
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    return () => clearTimeout(interval);
  }, [seconds, minutes]);

  const mins = String(minutes);
  let secs = String(seconds);

  if (seconds < 10) secs = `0${secs}`;

  return { mins, secs };
};

export function VideoCard({ videoId }: IProps) {
  const { mins, secs } = useCountdown(5);

  return (
    <>
      <section className={styles.box}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?showinfo=0&rel=0&fs=0`}
        />
      </section>
      {mins === "-1" ? (
        <>
          <h1>BOOOMMMMM??? 😂🤣😁</h1>
          <h1>
            {mins} : {secs}{" "}
          </h1>
        </>
      ) : (
        <h1>
          <h1>Achem o erro!!! 🙈🙊</h1>
          {mins} : {secs}{" "}
        </h1>
      )}
    </>
  );
}
