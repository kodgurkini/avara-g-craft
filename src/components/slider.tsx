import { Slider as BaseSlider } from "@base-ui-components/react/slider";
import styles from "../styles/slider.module.css";

const Slider = ({
  defaultValue = 25,
  min = 0,
  max = 100,
  step = 1,
  labels = [],
}: {
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  labels?: string[];
}) => {
  return (
    <div className={styles.SliderContainer}>
      <BaseSlider.Root
        defaultValue={[defaultValue]}
        min={min}
        max={max}
        step={step}
        minStepsBetweenValues={1}
      >
        <BaseSlider.Control className={styles.Control}>
          <BaseSlider.Track className={styles.Track}>
            <BaseSlider.Indicator className={styles.Indicator} />
            <BaseSlider.Thumb className={styles.Thumb} />
          </BaseSlider.Track>
        </BaseSlider.Control>
      </BaseSlider.Root>
      {labels.length > 0 && (
        <div className={styles.LabelsContainer}>
          {labels.map((label, index) => (
            <div key={index} className={styles.Label}>
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
