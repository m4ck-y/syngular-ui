import React from 'react';
import styles from './FuiGlassSelect.module.css';

interface FuiGlassSelectProps {
  label?: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

const FuiGlassSelect: React.FC<FuiGlassSelectProps> = ({
  label,
  options,
  value,
  onChange,
  className = ''
}) => {
  return (
    <div className={`${styles.fuiGlassInputGroup} ${className}`}>
      {label && <label className={styles.fuiGlassLabel}>{label}</label>}
      <select className={styles.fuiGlassSelect} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FuiGlassSelect;