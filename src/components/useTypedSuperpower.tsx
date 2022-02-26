import { useEffect, useState } from "react";

enum Phase {
  Typing,
  Pausing,
  Deleting,
}

const TYPING_INTERVAL = 150;
const PAUSE_MS = 1000;
const DELETING_INTERVAL = 50;

export function useTypedSuperpower(superpowers: string[]) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phase, setPhase] = useState(Phase.Typing);
  const [typedSuperpower, setTypedSuperpower] = useState("");

  useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        const nextTypedSuperPower = superpowers[selectedIndex].slice(
          0,
          typedSuperpower.length + 1
        );

        if (nextTypedSuperPower === typedSuperpower) {
          setPhase(Phase.Pausing);
          return;
        }

        const timeout = setTimeout(() => {
          setTypedSuperpower(nextTypedSuperPower);
        }, TYPING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      case Phase.Deleting: {
        if (!typedSuperpower) {
          const nextIndex = selectedIndex + 1;
          setSelectedIndex(superpowers[nextIndex] ? nextIndex : 0);
          setPhase(Phase.Typing);
          return;
        }

        const nextRemaining = superpowers[selectedIndex].slice(
          0,
          typedSuperpower.length - 1
        );

        const timeout = setTimeout(() => {
          setTypedSuperpower(nextRemaining);
        }, DELETING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      default:
        const timeout = setTimeout(() => {
          setPhase(Phase.Deleting);
        }, PAUSE_MS);

        return () => clearTimeout(timeout);
    }

    if (phase === Phase.Pausing) return;
  }, [phase, selectedIndex, superpowers, typedSuperpower]);

  return typedSuperpower;
}
