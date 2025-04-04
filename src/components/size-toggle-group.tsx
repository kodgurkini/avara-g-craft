import * as React from "react";
import { Toggle } from "@base-ui-components/react/toggle";
import { ToggleGroup } from "@base-ui-components/react/toggle-group";
import styles from "../styles/toggle.module.css";
import { useAppCardStore } from "../store/app-card-store";
import { flushSync } from "react-dom";
import useSound from "use-sound";
import largerSwosh from "../assets/sizechange_11labs.mp3";
import smallerSwosh from "../assets/smaller_swosh_11labs.mp3";

export default function SizeToggleGroup() {
  const setSize = useAppCardStore((state) => state.setSize);
  const prevSize = useAppCardStore((state) => state.size);
  const [playSmaller] = useSound(smallerSwosh, { volume: 0.4 });
  const [playLarger] = useSound(largerSwosh, { volume: 0.4 });

  return (
    <ToggleGroup
      defaultValue={["large"]}
      className={styles.Panel}
      onValueChange={(value) => {
        document.startViewTransition(() => {
          flushSync(() => {
            const size = value[0] as "small" | "medium" | "large";
            if (!size) return;

            setSize(size);

            const sizeValues = { small: 1, medium: 2, large: 3 };
            const isIncreasing = sizeValues[size] > sizeValues[prevSize];

            if (isIncreasing) {
              playLarger();
            } else {
              playSmaller();
            }
          });
        });
      }}
    >
      <Toggle aria-label="Align left" value="small" className={styles.Button}>
        S
      </Toggle>
      <Toggle
        aria-label="Align center"
        value="medium"
        className={styles.Button}
      >
        M
      </Toggle>
      <Toggle aria-label="Align right" value="large" className={styles.Button}>
        L
      </Toggle>
    </ToggleGroup>
  );
}
