import styles from './NeumorphicInput.module.css';

interface NeumorphicInputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NeumorphicInput: React.FC<NeumorphicInputProps> = ({
  label,
  placeholder,
  type = 'text',
  value,
  disabled = false,
  onChange
}) => {
  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputContainer}>
        <input
          className={`${styles.input} ${disabled ? styles.disabled : ''}`}
          type={type}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={onChange}
        />
      </div>
    </div>
  );
};