import React from 'react';
import styles from './FuiGlassRadio.module.css';

interface FuiGlassRadioProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}

const FuiGlassRadio: React.FC<FuiGlassRadioProps> = ({
  label,
  name,
  value,
  checked = false,
  onChange,
  className = ''
}) => {
  return (
    <label className={`${styles.fuiGlassRadio} ${className}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
      />
      <span className={styles.radiomark}></span>
      <span>{label}</span>
    </label>
  );
};

export default FuiGlassRadio;