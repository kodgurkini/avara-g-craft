import { Input as BaseInput } from "@base-ui-components/react/input";
import styles from "../styles/input.module.css";

interface InputProps {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const Input = ({
  placeholder = "Name",
  value,
  defaultValue,
  onChange,
  className,
}: InputProps) => {
  return (
    <BaseInput
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={(e) => onChange?.(e.target.value)}
      className={`${styles.Input} ${className || ""}`}
    />
  );
};

export default Input;
