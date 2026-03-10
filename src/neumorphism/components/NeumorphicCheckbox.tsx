import { useState } from 'react';
import styles from './NeumorphicCheckbox.module.css';

interface NeumorphicCheckboxProps {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export const NeumorphicCheckbox: React.FC<NeumorphicCheckboxProps> = ({
  label,
  checked = false,
  disabled = false,
  onChange
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    if (disabled) return;
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <label className={`${styles.wrapper} ${disabled ? styles.disabled : ''}`}>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          className={styles.hiddenInput}
        />
        <div className={`${styles.checkbox} ${isChecked ? styles.checked : ''}`}>
          {isChecked && <div className={styles.checkmark}>✓</div>}
        </div>
      </div>
      <span className={styles.label}>{label}</span>
    </label>
  );
};