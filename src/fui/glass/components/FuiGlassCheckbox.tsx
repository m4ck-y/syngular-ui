import React from 'react';
import styles from './FuiGlassCheckbox.module.css';

interface FuiGlassCheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

const FuiGlassCheckbox: React.FC<FuiGlassCheckboxProps> = ({
  label,
  checked = false,
  onChange,
  className = ''
}) => {
  return (
    <label className={`${styles.fuiGlassCheckbox} ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className={styles.checkmark}></span>
      <span>{label}</span>
    </label>
  );
};

export default FuiGlassCheckbox;