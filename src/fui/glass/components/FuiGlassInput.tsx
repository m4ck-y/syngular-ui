import React from 'react';
import styles from './FuiGlassInput.module.css';

interface FuiGlassInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const FuiGlassInput: React.FC<FuiGlassInputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  disabled = false,
  onChange,
  className = ''
}) => {
  return (
    <div className={`${styles.fuiGlassInputGroup} ${className}`}>
      {label && <label className={styles.fuiGlassLabel}>{label}</label>}
      <input
        type={type}
        className={styles.fuiGlassInput}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};

export default FuiGlassInput;